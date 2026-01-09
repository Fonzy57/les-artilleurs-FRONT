// ANGULAR
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { catchError, finalize, Observable, tap, throwError } from "rxjs";

// MODELS
import { FaqAdmin } from "@shared/models/faq.model";
import { FaqFormPayload } from "@pages/dashboard/site-management/faq/faq-form-dialog/faq-form-dialog";

// SERVICES
import { ToastService } from "@shared/ui/toast/toast.service";

// CONFIG
import { artilleursConfig } from "@core/config/global.config";

@Injectable({
  providedIn: "root",
})
export class FaqAdminService {
  private readonly http = inject(HttpClient);
  private readonly toast = inject(ToastService);
  private readonly requestedId = signal<number | null>(null);

  readonly faqItems = signal<FaqAdmin[]>([]);
  readonly selectedFaqItem = signal<FaqAdmin | null>(null);

  readonly loadingList = signal(false);
  readonly errorList = signal(false);

  readonly loadingOne = signal(false);
  readonly errorOne = signal(false);

  readonly saving = signal(false);
  readonly errorSave = signal(false);

  readonly deleting = signal(false);
  readonly errorDelete = signal(false);

  loadFaqItems(): void {
    this.loadingList.set(true);
    this.errorList.set(false);

    this.http
      .get<FaqAdmin[]>(`${artilleursConfig.apiUrl}/admin/faq`)
      .pipe(finalize(() => this.loadingList.set(false)))
      .subscribe({
        next: (items) => {
          this.faqItems.set(items);
        },
        error: (error) => {
          this.errorList.set(true);
          console.error("❌ Erreur FAQ Admin:", error);
          console.error("📝 Détails de l'erreur:", {
            status: error.status,
            statusText: error.statusText,
            message: error.message,
            url: error.url,
          });
          this.toast.error(
            "Récupération des items",
            "Une erreur s'est produite lors de la récupération des items de la FAQ.",
            {
              sticky: true,
            },
          );
        },
      });
  }

  refresh(): void {
    this.loadFaqItems();
  }

  getOneFaqItem(id: number) {
    this.requestedId.set(id);
    this.loadingOne.set(true);
    this.errorOne.set(false);

    this.http
      .get<FaqAdmin>(`${artilleursConfig.apiUrl}/admin/faq/${id}`)
      .pipe(finalize(() => this.loadingOne.set(false)))
      .subscribe({
        next: (item) => {
          if (this.requestedId() !== id) return;
          this.selectedFaqItem.set(item);
        },
        error: (error) => {
          this.errorOne.set(true);
          console.error("❌ Erreur GET ONE FAQ Admin:", error);
          this.toast.error(
            "Récupération d'un item",
            "Une erreur s'est produite lors de la récupération de l'item de la FAQ.",
            {
              sticky: true,
            },
          );
        },
      });
  }

  clearSelected(): void {
    this.requestedId.set(null);
    this.selectedFaqItem.set(null);
  }

  addFaqItem(payload: FaqFormPayload): Observable<FaqAdmin> {
    this.saving.set(true);
    this.errorSave.set(false);

    return this.http
      .post<FaqAdmin>(`${artilleursConfig.apiUrl}/admin/faq`, payload)
      .pipe(
        tap(() => {
          this.toast.success(
            "Ajout d'un élément",
            "L'élément a bien été ajouté à la FAQ !",
          );
          this.refresh();
        }),
        catchError((error) => {
          this.errorSave.set(true);
          console.error("❌ Erreur FAQ Admin (POST):", error);
          if (error.status === 400) {
            this.toast.error(
              "Ajout impossible",
              "Les données envoyées sont invalides. Vérifie les champs du formulaire.",
              { sticky: true },
            );
          } else if (error.status === 401 || error.status === 403) {
            this.toast.error(
              "Accès refusé",
              "Tu n'as pas les droits pour ajouter un élément.",
              { sticky: true },
            );
          } else {
            this.toast.error(
              "Erreur serveur",
              "Une erreur inattendue s'est produite. Réessaie plus tard.",
              { sticky: true },
            );
          }

          return throwError(() => error);
        }),
        finalize(() => this.saving.set(false)),
      );
  }

  // return an Observable → the component close the dialog if success
  editFaqItem(id: number, payload: FaqFormPayload): Observable<FaqAdmin> {
    this.saving.set(true);
    this.errorSave.set(false);

    return this.http
      .put<FaqAdmin>(`${artilleursConfig.apiUrl}/admin/faq/${id}`, payload)
      .pipe(
        tap((updated) => {
          this.selectedFaqItem.set(updated);
          this.toast.success(
            "Modification d'un élément",
            "L'élément a bien été modifié !",
          );
          this.refresh();
        }),
        catchError((error) => {
          this.errorSave.set(true);
          console.error("❌ Erreur FAQ Admin (EDIT):", error);

          if (error.status === 400) {
            this.toast.error(
              "Modification impossible",
              "Les données envoyées sont invalides. Vérifie les champs du formulaire.",
              { sticky: true },
            );
          } else if (error.status === 404) {
            this.toast.error(
              "Élément introuvable",
              "Cet élément de la FAQ n'existe plus. La liste va être rechargée.",
              { sticky: true },
            );

            this.refresh();
          } else {
            this.toast.error(
              "Erreur serveur",
              "Une erreur inattendue s'est produite. Réessaie plus tard.",
              { sticky: true },
            );
          }

          return throwError(() => error);
        }),
        finalize(() => this.saving.set(false)),
      );
  }

  deleteFaqItem(faqItem: FaqAdmin): void {
    this.deleting.set(true);
    this.errorDelete.set(false);

    this.http
      .delete(`${artilleursConfig.apiUrl}/admin/faq/${faqItem.id}`)
      .pipe(finalize(() => this.deleting.set(false)))
      .subscribe({
        next: () => {
          this.toast.success(
            "Suppression d'un élément de la FAQ",
            `L'élément "${faqItem.question}" a bien été supprimé !`,
          );
          this.refresh();
        },
        error: (error) => {
          this.errorDelete.set(true);
          console.error("❌ Erreur DELETE FAQ Admin:", error);
          this.toast.error(
            "Suppression d'un élément",
            "Une erreur s'est produite lors de la suppression de l'élément.",
            { sticky: true },
          );
        },
      });
  }
}
