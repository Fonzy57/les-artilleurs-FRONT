// ANGULAR
import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

// SERVICES
import { InfoBlockAdminService } from "app/data-access/admin/info-block/info-block-admin.service";
import { ToastService } from "@shared/ui/toast/toast.service";

// COMPONENTS
import { AlertCard } from "@shared/ui/alert-card/alert-card";
import { ButtonComponent } from "@shared/ui/button/button";
import { ActionIconButton } from "@layouts/dashboard-layout/ui/action-icon-button/action-icon-button";
import { TableSkeleton } from "@shared/ui/skeleton/table-skeleton/table-skeleton";
import { InfoPreview } from "./info-preview/info-preview";
import { DashButton } from "@layouts/dashboard-layout/ui/dash-button/dash-button";

// PRIME NG
import { TableModule } from "primeng/table";
import { ConfirmationService } from "primeng/api";
import { ConfirmDialog } from "primeng/confirmdialog";

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
    ConfirmDialog,
    DashButton,
  ],
  templateUrl: "./infos.html",
})
export class InfosManagement implements OnInit {
  readonly infoBlockAdminService = inject(InfoBlockAdminService);
  private readonly toast = inject(ToastService);
  confirmationService = inject(ConfirmationService);

  ngOnInit(): void {
    this.infoBlockAdminService.loadInfoBlocks();
  }

  /* --- ADD --- */
  openCreateDialog() {
    /* TODO FAIRE LE BOUTON FONCTIONNEL */
    console.log("j'ouvre la dialog de création");
  }

  /* --- EDIT --- */
  openEditDialog(infoBlock: InfoBlockAdmin): void {
    console.log("Je clique sur le bouton modifier : ", infoBlock);
    /* this.dialogMode = "edit";
      this.faqService.getOneFaqItem(faqItem.id);
      this.dialogVisible = true; */
  }

  /* --- DELETE --- */
  onClickDelete(infoBlock: InfoBlockAdmin): void {
    const truncateContent = infoBlock.content.slice(0, 45);
    this.confirmationService.confirm({
      key: "info-block-delete",
      header: "Supprimer une info",
      message: `${truncateContent}...`,
      accept: () => {
        this.onDeleteInfo(infoBlock);
      },
      reject: () => {
        this.toast.info(
          "Suppression annulée",
          `L'info "${truncateContent}..." n'a pas été supprimé.`,
        );
      },
    });
  }

  /* --- CONFIRM DIALOG ACTIONS --- */
  onDeleteInfo(infoBlock: InfoBlockAdmin): void {
    this.infoBlockAdminService.deleteInfo(infoBlock);
  }
}
