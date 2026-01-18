// ANGULAR
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { artilleursConfig } from "@core/config/global.config";
import { ClubInfoAdmin } from "@shared/models/club-info.model";
import { ToastService } from "@shared/ui/toast/toast.service";
import { finalize } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClubInfoAdminService {
  private readonly http = inject(HttpClient);
  private readonly toast = inject(ToastService);

  readonly clubInfos = signal<ClubInfoAdmin | null>(null);
  readonly loading = signal<boolean>(false);
  readonly error = signal<boolean>(false);

  readonly saving = signal<boolean>(false);
  readonly errorSaving = signal<boolean>(false);

  loadingClubInfos(): void {
    this.loading.set(true);
    this.error.set(false);

    this.http
      .get<ClubInfoAdmin>(`${artilleursConfig.apiUrl}/admin/club-info`)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => {
          this.clubInfos.set(data);
        },
        error: (error) => {
          this.error.set(true);
          console.error("❌ Erreur INFO BLOCK Admin:", error);
          this.toast.error(
            "Récupération des infos",
            "Une erreur s'est produite lors de la récupération des infos du club.",
            {
              sticky: true,
            },
          );
        },
      });
  }

  refresh(): void {
    this.loadingClubInfos();
  }
}
