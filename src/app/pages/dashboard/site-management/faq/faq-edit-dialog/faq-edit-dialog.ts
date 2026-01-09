// ANGULAR
import { Component, effect, inject, input, output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgClass } from "@angular/common";

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
    NgClass,
  ],
  templateUrl: "./faq-edit-dialog.html",
})
export class FaqEditDialog {
  private readonly formBuilder = inject(FormBuilder);
  readonly QUESTION_MAX = 255;
  readonly RESPONSE_MAX = 1500;

  // inputs
  visible = input<boolean>(false);
  item = input<FaqAdmin | null>(null);
  loading = input<boolean>(false);

  // outputs
  visibleChange = output<boolean>();
  cancel = output<void>();
  save = output<FaqEditPayload>();

  readonly form = this.formBuilder.nonNullable.group({
    question: [
      "",
      [Validators.required, Validators.maxLength(this.QUESTION_MAX)],
    ],
    response: [
      "",
      [Validators.required, Validators.maxLength(this.RESPONSE_MAX)],
    ],
  });

  constructor() {
    effect(() => {
      const item = this.item();
      if (!item) return;

      this.form.patchValue({
        question: item.question,
        response: item.answer,
      });

      this.form.markAsPristine();
      this.form.markAsUntouched();
    });

    effect(() => {
      if (this.loading()) {
        this.form.disable({ emitEvent: false });
      } else {
        this.form.enable({ emitEvent: false });
      }
    });
  }

  isInvalid(name: "question" | "response"): boolean {
    const control = this.form.get(name);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  charCount(controlName: "question" | "response"): number {
    return this.form.controls[controlName].value.length;
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
