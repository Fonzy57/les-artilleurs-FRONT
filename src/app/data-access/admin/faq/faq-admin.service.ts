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
  readonly loading = signal<boolean>(false);
  readonly error = signal<boolean>(false);

  loadFaqItems(): void {
    this.loading.set(true);
    this.error.set(false);

    this.http
      .get<FaqAdmin[]>(`${artilleursConfig.apiUrl}/admin/faq`)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (items) => {
          this.faqItems.set(items);
        },
        error: (error) => {
          this.error.set(true);
          console.error("❌ Erreur FAQ Admin:", error);
          console.error("📝 Détails de l'erreur:", {
            status: error.status,
            statusText: error.statusText,
            message: error.message,
            url: error.url,
          });
          this.toast.error(
            "Récupération des items",
            "Une erreur s'est produite lors de la récupération des items du FAQ.",
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
    this.loading.set(true);
    this.error.set(false);

    this.http
      .delete(`${artilleursConfig.apiUrl}/admin/faq/${faqItem.id}`)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: () => {
          this.toast.success(
            "Suppression d'un item de la FAQ",
            `L'élément "${faqItem.question}" a bien été supprimé !`,
          );
          this.refresh();
        },
        error: (error) => {
          console.error("❌ Erreur DELETE FAQ Admin:", error);
          this.toast.error(
            "Suppression",
            "Une erreur s'est produite lors de la suppression de l’item.",
            { sticky: true },
          );
        },
      });
  }

  /* ------------------------------------------- */
  /* TODO RECUPERER UN SEUL ELEMENT POUR LE EDIT */
  /* ------------------------------------------- */
}
