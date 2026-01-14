// ANGULAR
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { artilleursConfig } from "@core/config/global.config";
import { InfoBlockPublic } from "@shared/models/info-block.model";

// CONFIG

@Injectable({
  providedIn: "root",
})
export class InfoBlockService {
  private readonly http = inject(HttpClient);

  readonly infoBlocks = signal<InfoBlockPublic[]>([]);
  readonly loading = signal<boolean>(false);
  readonly error = signal<boolean>(false);

  laodingInfoBlocks(): void {
    this.loading.set(true);
    this.error.set(false);

    this.http
      .get<
        InfoBlockPublic[]
      >(`${artilleursConfig.apiUrl}/public/site/info-block`)
      .subscribe({
        next: (items) => {
          this.infoBlocks.set(items);
          this.loading.set(false);
        },
        error: (error) => {
          this.loading.set(false);
          this.error.set(true);
          console.error("❌ Erreur FAQ Site:", error);
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
    this.laodingInfoBlocks();
  }
}
