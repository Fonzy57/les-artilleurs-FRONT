import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { artilleursConfig } from "@core/config/global.config";
import { ClubInfoPublic } from "@shared/models/club-info.model";
import { delay, finalize } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClubInfoService {
  private readonly http = inject(HttpClient);

  readonly clubInfos = signal<ClubInfoPublic | null>(null);
  readonly loading = signal<boolean>(false);
  readonly error = signal<boolean>(false);

  loadingClubInfo(): void {
    this.loading.set(true);
    this.error.set(false);

    this.http
      .get<ClubInfoPublic>(`${artilleursConfig.apiUrl}/public/site/club-info`)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => {
          this.clubInfos.set(data);
        },
        error: (error) => {
          this.error.set(true);
          console.error("❌ Erreur INFO BLOCKS Site:", error);
        },
      });
  }

  refresh(): void {
    this.loadingClubInfo();
  }
}
