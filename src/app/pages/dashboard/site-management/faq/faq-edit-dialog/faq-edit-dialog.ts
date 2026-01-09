// ANGULAR
import { Component, effect, inject, input, output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

// PRIME NG
import { Dialog } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { TextareaModule } from "primeng/textarea";

// COMPONENTS
import { DashButton } from "@layouts/dashboard-layout/ui/dash-button/dash-button";
import { FaqAdmin } from "@shared/models/faq.model";

// TYPES
export type FaqEditPayload = {
  question: string;
  answer: string;
};

@Component({
  standalone: true,
  selector: "app-faq-edit-dialog",
  imports: [
    Dialog,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    DashButton,
  ],
  templateUrl: "./faq-edit-dialog.html",
})
export class FaqEditDialog {
  private readonly formBuilder = inject(FormBuilder);

  // inputs
  visible = input<boolean>(false);
  item = input<FaqAdmin | null>(null);
  loading = input<boolean>(false);

  // outputs
  visibleChange = output<boolean>();
  cancel = output<void>();
  save = output<FaqEditPayload>();

  readonly form = this.formBuilder.nonNullable.group({
    question: ["", [Validators.required, Validators.maxLength(255)]],
    response: ["", [Validators.required, Validators.maxLength(1500)]],
  });

  constructor() {
    effect(() => {
      const item = this.item();
      if (!item) return;

      this.form.patchValue({
        question: item.question,
        response: item.answer,
      });
    });
  }

  isInvalid(name: "question" | "response"): boolean {
    const control = this.form.get(name);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  handleCancel(): void {
    this.form.reset();
    this.visibleChange.emit(false);
    this.cancel.emit();
  }

  onHide(): void {
    this.handleCancel();
  }

  handleSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { question, response } = this.form.getRawValue();
    this.save.emit({ question, answer: response });
  }
}
