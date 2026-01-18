// ANGULAR
import { Component, computed, inject, OnInit } from "@angular/core";

// SERVICE
import { ClubInfoService } from "app/data-access/public/club/club-info.service";

@Component({
  standalone: true,
  selector: "app-website-infos",
  imports: [],
  templateUrl: "./infos.html",
})
export class Infos implements OnInit {
  readonly clubInfoService = inject(ClubInfoService);

  readonly clubInfo = this.clubInfoService.clubInfos;

  readonly address = computed(() => {
    const info = this.clubInfo();
    return {
      stadiumName: info?.stadiumName ?? "Yacine CHERRADI",
      street: info?.street ?? "Rue de la Grange-Aux-Bois",
      city: info?.city ?? "Metz",
      postalCode: info?.postalCode ?? "57070",
    };
  });

  ngOnInit(): void {
    this.clubInfoService.loadingClubInfo();
  }
}
