// ANGULAR
import { HttpClient } from "@angular/common/http";
import { DestroyRef, inject, Injectable, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { finalize } from "rxjs";

// MODELS
import { InfoBlockPublic } from "@shared/models/info-block.model";

// CONFIG
import { artilleursConfig } from "@core/config/global.config";

@Injectable({
  providedIn: "root",
})
export class InfoBlockService {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  readonly infoBlocks = signal<InfoBlockPublic[]>([]);
  readonly loading = signal<boolean>(false);
  readonly error = signal<boolean>(false);

  loadInfoBlocks(): void {
    this.loading.set(true);
    this.error.set(false);

    this.http
      .get<InfoBlockPublic[]>(
        `${artilleursConfig.apiUrl}/public/site/info-block`,
      )
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: (items) => {
          this.infoBlocks.set(items);
        },
        error: (error) => {
          this.error.set(true);
          console.error("❌ Erreur INFO BLOCKS Site:", error);

          /* TODO A SUPPRIMER QUAND TESTS FINIS */
          console.error("📝 Détails de l'erreur:", {
            status: error.status,
            statusText: error.statusText,
            message: error.message,
            url: error.url,
          });
        },
      });
  }

  refresh(): void {
    this.loadInfoBlocks();
  }
}
