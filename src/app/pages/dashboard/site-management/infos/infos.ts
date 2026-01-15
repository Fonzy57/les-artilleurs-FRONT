// ANGULAR
import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

// SERVICES
import { InfoBlockAdminService } from "app/data-access/admin/info-block/info-block-admin.service";

// COMPONENTS
import { AlertCard } from "@shared/ui/alert-card/alert-card";
import { ButtonComponent } from "@shared/ui/button/button";
import { ActionIconButton } from "@layouts/dashboard-layout/ui/action-icon-button/action-icon-button";
import { TableSkeleton } from "@shared/ui/skeleton/table-skeleton/table-skeleton";
import { InfoPreview } from "./info-preview/info-preview";

// PRIME NG
import { TableModule } from "primeng/table";

// MODELS
import { InfoBlockAdmin } from "@shared/models/info-block.model";

@Component({
  standalone: true,
  selector: "app-management-infos",
  imports: [
    AlertCard,
    ButtonComponent,
    TableModule,
    ActionIconButton,
    CommonModule,
    TableSkeleton,
    InfoPreview,
  ],
  templateUrl: "./infos.html",
})
export class InfosManagement implements OnInit {
  readonly infoBlockAdminService = inject(InfoBlockAdminService);

  ngOnInit(): void {
    this.infoBlockAdminService.loadInfoBlocks();
  }

  openEditDialog(infoBlock: InfoBlockAdmin): void {
    console.log("Je clique sur le bouton modifier : ", infoBlock);
    /* this.dialogMode = "edit";
      this.faqService.getOneFaqItem(faqItem.id);
      this.dialogVisible = true; */
  }

  onDelete(infoBlock: InfoBlockAdmin): void {
    console.log("Je clique sur supprimer");
  }
}
