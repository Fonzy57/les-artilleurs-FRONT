// ANGULAR
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { catchError, finalize, Observable, tap, throwError } from "rxjs";

// MODELS
import { InfoBlockAdmin } from "@shared/models/info-block.model";
import { InfoBlockPayload } from "@pages/dashboard/site-management/infos/info-block-form-dialog/info-block-form-dialog";

// SERVICES
import { ToastService } from "@shared/ui/toast/toast.service";

// UTILS
import {
  showToastBadRequestError,
  showToastServerError,
  showToastUnauthorizedError,
} from "@shared/utils/toast-generic-error";

// CONFIG
import { artilleursConfig } from "@core/config/global.config";

@Injectable({
  providedIn: "root",
})
export class InfoBlockAdminService {
  private readonly http = inject(HttpClient);
  private readonly toast = inject(ToastService);
  private readonly requestedId = signal<number | null>(null);

  readonly infoBlocks = signal<InfoBlockAdmin[]>([]);
  readonly selectedInfoBlock = signal<InfoBlockAdmin | null>(null);

  readonly loadingList = signal(false);
  readonly errorList = signal(false);

  readonly loadingOne = signal(false);
  readonly errorOne = signal(false);

  readonly saving = signal(false);
  readonly errorSave = signal(false);

  readonly deleting = signal(false);
  readonly errorDelete = signal(false);

  loadInfoBlocks(): void {
    this.loadingList.set(true);
    this.errorList.set(false);

    this.http
      .get<InfoBlockAdmin[]>(`${artilleursConfig.apiUrl}/admin/info-block`)
      .pipe(finalize(() => this.loadingList.set(false)))
      .subscribe({
        next: (items) => {
          this.infoBlocks.set(items);
        },
        error: (error) => {
          this.errorList.set(true);
          console.error("❌ Erreur INFO BLOCK Admin:", error);
          this.toast.error(
            "Récupération des infos",
            "Une erreur s'est produite lors de la récupération des blocs d'infos.",
            {
              sticky: true,
            },
          );
        },
      });
  }

  getOneInfoBlock(id: number): void {
    this.requestedId.set(id);
    this.loadingOne.set(true);
    this.errorOne.set(false);

    this.http
      .get<InfoBlockAdmin>(`${artilleursConfig.apiUrl}/admin/info-block/${id}`)
      .pipe(finalize(() => this.loadingOne.set(false)))
      .subscribe({
        next: (infoBlock) => {
          if (this.requestedId() !== id) return;
          this.selectedInfoBlock.set(infoBlock);
        },
        error: (error) => {
          this.errorOne.set(true);
          console.error("❌ Erreur GET ONE INFO BLOCK Admin:", error);
          this.toast.error(
            "Récupération d'une info",
            "Une erreur s'est produite lors de la récupération de l'info.",
            {
              sticky: true,
            },
          );
        },
      });
  }

  addInfoBlock(payload: InfoBlockPayload): Observable<InfoBlockAdmin> {
    this.saving.set(true);
    this.errorSave.set(false);

    return this.http
      .post<InfoBlockAdmin>(
        `${artilleursConfig.apiUrl}/admin/info-block`,
        payload,
      )
      .pipe(
        tap(() => {
          this.toast.success("Ajout d'une info", "L'info a bien été ajoutée !");
          this.refresh();
        }),
        catchError((error) => {
          this.errorSave.set(true);
          console.error("❌ Erreur INFO BLOCK Admin (POST):", error);

          /* TODO JE POURRAIS FAIRE UNE FONCTION POUR CE BLOC CAR REPETITION DANS D'AUTRES SERVICES */
          if (error.status === 400) {
            showToastBadRequestError(this.toast);
          } else if (error.status === 401 || error.status === 403) {
            showToastUnauthorizedError(this.toast);
          } else {
            showToastServerError(this.toast);
          }

          return throwError(() => error);
        }),
        finalize(() => this.saving.set(false)),
      );
  }

  editInfoBlock(
    id: number,
    payload: InfoBlockPayload,
  ): Observable<InfoBlockAdmin> {
    this.saving.set(true);
    this.errorSave.set(false);

    return this.http
      .put<InfoBlockAdmin>(
        `${artilleursConfig.apiUrl}/admin/info-block/${id}`,
        payload,
      )
      .pipe(
        tap((infoUpdated) => {
          this.selectedInfoBlock.set(infoUpdated);
          this.toast.success(
            "Modification de l'info",
            "L'info a bien été modifiée !",
          );
          this.refresh();
        }),
        catchError((error) => {
          this.errorSave.set(true);
          console.error("❌ Erreur INFO BLOCK Admin (EDIT):", error);

          if (error.status === 400) {
            showToastBadRequestError(this.toast, "put");
          } else if (error.status === 404) {
            this.toast.error(
              "Info introuvable",
              "Cette info n'existe plus. La liste va être rechargée.",
              { sticky: true },
            );

            this.refresh();
          } else if (error.status === 401 || error.status === 403) {
            showToastUnauthorizedError(this.toast, "put");
          } else {
            showToastServerError(this.toast);
          }

          return throwError(() => error);
        }),
        finalize(() => this.saving.set(false)),
      );
  }

  clearSelectedInfo(): void {
    this.requestedId.set(null);
    this.selectedInfoBlock.set(null);
  }

  deleteInfo(infoBlock: InfoBlockAdmin): void {
    this.deleting.set(true);
    this.errorDelete.set(false);

    this.http
      .delete(`${artilleursConfig.apiUrl}/admin/info-block/${infoBlock.id}`)
      .pipe(finalize(() => this.deleting.set(false)))
      .subscribe({
        next: () => {
          this.toast.success(
            "Suppression d'une info",
            `L'info "${infoBlock.content.slice(0, 45)}" a bien été supprimée !`,
          );
          this.refresh();
        },
        error: (error) => {
          this.errorDelete.set(true);
          console.error("❌ Erreur suppression INFO BLOCK Admin:", error);
          this.toast.error(
            "Suppression d'une info",
            "Une erreur s'est produite lors de la suppression de l'info.",
            { sticky: true },
          );
        },
      });
  }

  refresh(): void {
    this.loadInfoBlocks();
  }
}
