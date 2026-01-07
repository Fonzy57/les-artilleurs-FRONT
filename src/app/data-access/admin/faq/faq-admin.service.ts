// ANGULAR
import { HttpClient } from "@angular/common/http";
import { DestroyRef, inject, Injectable, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

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
  private readonly destroyRef = inject(DestroyRef);
  private readonly toast = inject(ToastService);

  readonly faqItems = signal<FaqAdmin[]>([]);
  readonly loading = signal<boolean>(false);
  readonly error = signal<boolean>(false);

  loadFaqItems(): void {
    this.loading.set(true);
    this.error.set(false);

    this.http
      .get<FaqAdmin[]>(`${artilleursConfig.apiUrl}/admin/faq`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (items) => {
          this.faqItems.set(items);
          this.loading.set(false);
          this.error.set(false);
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
          );
          this.loading.set(false);
        },
      });
  }

  refresh(): void {
    this.loadFaqItems();
  }
}
