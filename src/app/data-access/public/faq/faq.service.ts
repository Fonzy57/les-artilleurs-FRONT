// ANGULAR
import { HttpClient } from "@angular/common/http";
import { DestroyRef, inject, Injectable, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

// MODELS
import { FaqPublic } from "@shared/models/faq.model";

// CONFIG
import { artilleursConfig } from "@core/config/app.config";

@Injectable({
  providedIn: "root",
})
export class FaqService {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  readonly faqItems = signal<FaqPublic[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  loadFaqItems(): void {
    this.loading.set(true);
    this.error.set(null);

    this.http
      .get<FaqPublic[]>(`${artilleursConfig.apiUrl}/public/site/faq`)
      // TODO VOIR SI JE LE LAISSE ICI, PAS NECESSAIRE
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (items) => {
          this.faqItems.set(items);
          this.loading.set(false);
        },
        error: (error) => {
          console.error("❌ Erreur FAQ Site:", error);
          console.error("📝 Détails de l'erreur:", {
            status: error.status,
            statusText: error.statusText,
            message: error.message,
            url: error.url,
          });
          this.loading.set(false);
          this.error.set("Erreur lors du chargement de la FAQ");
        },
      });
  }

  refresh(): void {
    this.loadFaqItems();
  }
}
