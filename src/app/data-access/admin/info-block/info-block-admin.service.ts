// ANGULAR
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { finalize } from "rxjs";

// MODELS
import { InfoBlockAdmin } from "@shared/models/info-block.model";

// SERVICES
import { ToastService } from "@shared/ui/toast/toast.service";

// UTILS

// CONFIG
import { artilleursConfig } from "@core/config/global.config";

@Injectable({
  providedIn: "root",
})
export class InfoBlockAdminService {
  private readonly http = inject(HttpClient);
  toast = inject(ToastService);

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
            "Récupération des items",
            "Une erreur s'est produite lors de la récupération des blocs d'infos.",
            {
              sticky: true,
            },
          );
        },
      });
  }

  refresh(): void {
    this.loadInfoBlocks();
  }
}
