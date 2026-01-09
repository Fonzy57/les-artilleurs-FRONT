// ANGULAR
import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";

// PRIME NG
import { TableModule } from "primeng/table";
import { ConfirmDialog } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";

// SERVICE
import { FaqAdminService } from "app/data-access/admin/faq/faq-admin.service";
import { ToastService } from "@shared/ui/toast/toast.service";

// COMPONENTS
import { ActionIconButton } from "@layouts/dashboard-layout/ui/action-icon-button/action-icon-button";
import { TableSkeleton } from "@shared/ui/skeleton/table-skeleton/table-skeleton";
import { AlertCard } from "@shared/ui/alert-card/alert-card";
import { ButtonComponent } from "@shared/ui/button/button";
import { DashButton } from "@layouts/dashboard-layout/ui/dash-button/dash-button";
import {
  FaqEditPayload,
  FaqEditDialog,
} from "./faq-edit-dialog/faq-edit-dialog";

// MODELS
import { FaqAdmin } from "@shared/models/faq.model";

@Component({
  standalone: true,
  selector: "app-management-faq",
  imports: [
    TableModule,
    CommonModule,
    ActionIconButton,
    ConfirmDialog,
    TableSkeleton,
    AlertCard,
    ButtonComponent,
    DashButton,
    FaqEditDialog,
  ],
  templateUrl: "./faq.html",
})
export class FaqManagement implements OnInit {
  readonly faqService = inject(FaqAdminService);
  private toast = inject(ToastService);
  confirmationService = inject(ConfirmationService);
  visible: boolean = false;

  ngOnInit(): void {
    this.faqService.loadFaqItems();
  }

  /* --- TABLE ACTIONS --- */
  onShowEditDialog(faqItem: FaqAdmin): void {
    this.faqService.getOneFaqItem(faqItem.id);
    this.visible = true;
  }

  onEditCancel(): void {
    this.visible = false;
    this.faqService.clearSelected();
  }

  onEditSave(editFormData: FaqEditPayload): void {
    const current = this.faqService.selectedFaqItem();
    if (!current) return;

    this.faqService.editFaqItem(current.id, editFormData).subscribe({
      next: () => {
        this.onEditCancel();
      },
      error: () => {},
    });
  }

  onDelete(faqItem: FaqAdmin): void {
    this.confirmationService.confirm({
      key: "faq-delete",
      header: "Supprimer l’élément de la FAQ",
      message: `${faqItem.question}`,
      accept: () => {
        this.onDeleteFaqItem(faqItem);
      },
      reject: () => {
        this.toast.info(
          "Suppression annulée",
          `L'élément de la FAQ "${faqItem.question}" n'a pas été supprimé.`,
        );
      },
    });
  }

  /* --- DIALOG ACTIONS --- */
  onDeleteFaqItem(faqItem: FaqAdmin): void {
    this.faqService.deleteFaqItem(faqItem);
  }
}
