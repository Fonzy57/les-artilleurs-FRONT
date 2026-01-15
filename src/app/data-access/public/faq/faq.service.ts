// ANGULAR
import { HttpClient } from "@angular/common/http";
import { DestroyRef, inject, Injectable, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { finalize } from "rxjs";

// MODELS
import { FaqPublic } from "@shared/models/faq.model";

// CONFIG
import { artilleursConfig } from "@core/config/global.config";

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
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: (items) => {
          this.faqItems.set(items);
        },
        error: (error) => {
          this.error.set("Erreur lors du chargement de la FAQ");
          console.error("❌ Erreur FAQ Site:", error);
        },
      });
  }

  refresh(): void {
    this.loadFaqItems();
  }
}
