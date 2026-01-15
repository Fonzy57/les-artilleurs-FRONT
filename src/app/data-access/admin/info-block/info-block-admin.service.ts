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
            "Récupération des infos",
            "Une erreur s'est produite lors de la récupération des blocs d'infos.",
            {
              sticky: true,
            },
          );
        },
      });
  }

  deleteInfo(infoBlock: InfoBlockAdmin): void {
    this.deleting.set(true);
    this.errorDelete.set(false);

    this.http
      .delete(`${artilleursConfig.apiUrl}/admin/info-block/${infoBlock.id}`)
      .pipe(finalize(() => this.deleting.set(false)))
      .subscribe({
        next: () => {
          this.toast.success(
            "Suppression d'une info",
            `L'info "${infoBlock.content.slice(0, 45)}" a bien été supprimée !`,
          );
          this.refresh();
        },
        error: (error) => {
          this.errorDelete.set(true);
          console.error("❌ Erreur suppression INFO BLOCK Admin:", error);
          this.toast.error(
            "Suppression d'une info",
            "Une erreur s'est produite lors de la suppression de l'info.",
            { sticky: true },
          );
        },
      });
  }

  refresh(): void {
    this.loadInfoBlocks();
  }
}
