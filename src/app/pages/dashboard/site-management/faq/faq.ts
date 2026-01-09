// ANGULAR
import { CommonModule } from "@angular/common";
import { Component, effect, inject, OnInit, signal } from "@angular/core";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

// PRIME NG
import { TableModule } from "primeng/table";
import { ConfirmDialog } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { Dialog } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { TextareaModule } from "primeng/textarea";

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
    Dialog,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaModule,
  ],
  templateUrl: "./faq.html",
})
export class FaqManagement implements OnInit {
  constructor() {
    effect(() => {
      const item = this.faqService.selectedFaqItem();

      if (!item) return;

      this.editFaqItemForm.patchValue({
        question: item.question,
        response: item.answer,
      });
    });
  }

  readonly faqService = inject(FaqAdminService);
  private toast = inject(ToastService);
  confirmationService = inject(ConfirmationService);
  visible: boolean = false;

  ngOnInit(): void {
    this.faqService.loadFaqItems();
  }

  /* --- FORM --- */
  formBuilder: FormBuilder = inject(FormBuilder);

  editFaqItemForm = this.formBuilder.group({
    question: ["", Validators.required],
    response: ["", Validators.required],
  });

  isInvalid(controlName: string) {
    const control = this.editFaqItemForm.get(controlName);
    return !!(control && control.invalid);
  }
  /* --- END FORM --- */

  /* --- TABLE ACTIONS --- */
  onShowEditDialog(faqItem: FaqAdmin): void {
    this.faqService.getOneFaqItem(faqItem.id);
    this.visible = true;
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

  onCancel() {
    this.visible = false;
    this.editFaqItemForm.reset();
    this.faqService.selectedFaqItem.set(null);
  }

  onEditItem() {
    if (this.editFaqItemForm.invalid) {
      this.editFaqItemForm.markAllAsTouched();
      return;
    }

    const item = this.faqService.selectedFaqItem();
    if (!item) return;

    const { question, response } = this.editFaqItemForm.getRawValue();

    // ici tu appelleras ton service PUT
    // this.faqService.editFaqItem({ ...item, question, answer: response });

    console.log("submit", item.id, question, response);
  }
}
