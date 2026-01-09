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

// MODELS
import { FaqAdmin } from "@shared/models/faq.model";
import {
  FaqFormPayload,
  FaqFormDialog,
  FaqFormMode,
} from "./faq-form-dialog/faq-form-dialog";

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
    FaqFormDialog,
  ],
  templateUrl: "./faq.html",
})
export class FaqManagement implements OnInit {
  readonly faqService = inject(FaqAdminService);
  private toast = inject(ToastService);
  confirmationService = inject(ConfirmationService);
  dialogVisible: boolean = false;
  dialogMode: FaqFormMode = "edit";

  ngOnInit(): void {
    this.faqService.loadFaqItems();
  }

  openCreateDialog(): void {
    this.dialogMode = "create";
    this.faqService.clearSelected();
    this.dialogVisible = true;
  }

  openEditDialog(faqItem: FaqAdmin): void {
    this.dialogMode = "edit";
    this.faqService.getOneFaqItem(faqItem.id);
    this.dialogVisible = true;
  }

  onDialogCancel(): void {
    this.dialogVisible = false;
    this.faqService.clearSelected();
  }

  onDialogSubmit(formData: FaqFormPayload): void {
    // CREATE
    if (this.dialogMode === "create") {
      this.faqService.addFaqItem(formData).subscribe({
        next: () => {
          this.onDialogCancel();
        },
      });
      return;
    }

    // EDIT
    const currentFaqItem = this.faqService.selectedFaqItem();
    if (!currentFaqItem) return;

    this.faqService.editFaqItem(currentFaqItem.id, formData).subscribe({
      next: () => {
        this.onDialogCancel();
      },
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

  /* --- CONFIRM DIALOG ACTIONS --- */
  onDeleteFaqItem(faqItem: FaqAdmin): void {
    this.faqService.deleteFaqItem(faqItem);
  }
}
