// ANGULAR
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { catchError, finalize, Observable, tap, throwError } from "rxjs";

// SERVICES
import { ToastService } from "@shared/ui/toast/toast.service";

// CONFIG
import { artilleursConfig } from "@core/config/global.config";

// MODELS
import {
  ClubInfoAdmin,
  ClubInfoUpsertPayload,
} from "@shared/models/club-info.model";

// UTILS
import {
  showToastBadRequestError,
  showToastServerError,
  showToastUnauthorizedError,
} from "@shared/utils/toast-generic-error";

@Injectable({
  providedIn: "root",
})
export class ClubInfoAdminService {
  private readonly http = inject(HttpClient);
  private readonly toast = inject(ToastService);

  readonly clubInfos = signal<ClubInfoAdmin | null>(null);
  readonly loading = signal<boolean>(false);
  readonly error = signal<boolean>(false);

  readonly saving = signal<boolean>(false);
  readonly errorSaving = signal<boolean>(false);

  loadingClubInfos(): void {
    this.loading.set(true);
    this.error.set(false);

    this.http
      .get<ClubInfoAdmin>(`${artilleursConfig.apiUrl}/admin/club-info`)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => {
          this.clubInfos.set(data);
        },
        error: (error) => {
          this.error.set(true);
          console.error("❌ Erreur INFO BLOCK Admin:", error);
          this.toast.error(
            "Récupération des infos",
            "Une erreur s'est produite lors de la récupération des infos du club.",
            {
              sticky: true,
            },
          );
        },
      });
  }

  refresh(): void {
    this.loadingClubInfos();
  }

  upsertClubInfos(payload: ClubInfoUpsertPayload): Observable<ClubInfoAdmin> {
    this.saving.set(true);
    this.errorSaving.set(false);

    return this.http
      .put<ClubInfoAdmin>(`${artilleursConfig.apiUrl}/admin/club-info`, payload)
      .pipe(
        tap((updated) => {
          this.clubInfos.set(updated);
          this.toast.success(
            "Modification des infos",
            "Les infos du club ont bien été modifiées.",
          );
        }),
        catchError((error) => {
          this.errorSaving.set(true);
          console.error("❌ Erreur CLUB INFO Admin (EDIT):", error);

          if (error.status === 400) {
            showToastBadRequestError(this.toast, "put");
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
}
