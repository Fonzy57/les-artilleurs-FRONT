// ANGULAR
import { Component, inject, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

// PRIME NG
import { InputTextModule } from "primeng/inputtext";
import { DividerModule } from "primeng/divider";

// COMPONENTS
import { DashButton } from "@layouts/dashboard-layout/ui/dash-button/dash-button";
import { ActionIconButton } from "@layouts/dashboard-layout/ui/action-icon-button/action-icon-button";
import { InputSkeleton } from "@shared/ui/skeleton/form/input-skeleton/input-skeleton";

// SERVICE
import { ClubInfoAdminService } from "app/data-access/admin/club/club-info-admin.service";

@Component({
  standalone: true,
  selector: "app-management-club-infos",
  imports: [
    InputTextModule,
    InputSkeleton,
    DashButton,
    ActionIconButton,
    DividerModule,
  ],
  templateUrl: "./club-infos.html",
})
export class ClubInfosManagement implements OnInit {
  readonly clubInfoAdminService = inject(ClubInfoAdminService);

  readonly infos = this.clubInfoAdminService.clubInfos;

  ngOnInit(): void {
    this.clubInfoAdminService.loadingClubInfos();
  }

  clickEdit(): void {
    console.log("Je clique sur modifier - CLUB INFOS");
  }
}
