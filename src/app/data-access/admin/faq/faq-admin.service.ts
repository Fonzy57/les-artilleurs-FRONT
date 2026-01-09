// ANGULAR
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { finalize } from "rxjs";

// MODELS
import { FaqAdmin } from "@shared/models/faq.model";

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
          console.error("❌ Erreur DELETE FAQ Admin:", error);
          this.toast.error(
            "Suppression d'un élément",
            "Une erreur s'est produite lors de la suppression de l'élément.",
            { sticky: true },
          );
        },
      });
  }

  getOneFaqItem(id: number) {
    this.loadingOne.set(true);
    this.errorOne.set(false);

    this.http
      .get<FaqAdmin>(`${artilleursConfig.apiUrl}/admin/faq/${id}`)
      .pipe(finalize(() => this.loadingOne.set(false)))
      .subscribe({
        next: (item) => {
          this.selectedFaqItem.set(item);
        },
        error: (error) => {
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
    this.selectedFaqItem.set(null);
  }

  // ✅ retourne un Observable → le composant ferme la modal après succès
  /* editFaqItem(id: number, payload: FaqUpdatePayload): Observable<FaqAdmin> {
    this.saving.set(true);
    this.errorSave.set(false);

    return this.http
      .put<FaqAdmin>(`${artilleursConfig.apiUrl}/admin/faq/${id}`, payload)
      .pipe(
        tap((updated) => {
          // on met à jour selected + on refresh la liste après succès
          this.selectedFaqItem.set(updated);
          this.toast.success(
            "Modification d'un élément",
            "L’élément a bien été modifié !",
          );
          this.refresh();
        }),
        catchError((error) => {
          this.errorSave.set(true);
          console.error("❌ Erreur FAQ Admin (EDIT):", error);

          // tu peux améliorer le message selon status 400/404
          this.toast.error(
            "Modification d'un élément",
            "Une erreur s'est produite lors de la modification de l'élément.",
            { sticky: true },
          );

          return throwError(() => error);
        }),
        finalize(() => this.saving.set(false)),
      );
  } */
}
