// ANGULAR
import {
  Component,
  computed,
  effect,
  inject,
  input,
  output,
} from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgClass } from "@angular/common";

// PRIME NG
import { Dialog } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { TextareaModule } from "primeng/textarea";

// COMPONENTS
import { DashButton } from "@layouts/dashboard-layout/ui/dash-button/dash-button";
import { ButtonSkeleton } from "@shared/ui/skeleton/button-skeleton/button-skeleton";
import { InputSkeleton } from "@shared/ui/skeleton/form/input-skeleton/input-skeleton";

// MODELS
import { FaqAdmin } from "@shared/models/faq.model";

// UTILS
import { sanitizeInput } from "@shared/utils/string-sanitize";

// CUSTOM VALIDATORS
import { requiredAndTrim } from "@shared/validators/trim-required.validator";

// TYPES
export type FaqFormMode = "create" | "edit";

export type FaqFormPayload = {
  question: string;
  answer: string;
};

@Component({
  standalone: true,
  selector: "app-faq-form-dialog",
  imports: [
    Dialog,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    DashButton,
    NgClass,
    InputSkeleton,
    ButtonSkeleton,
  ],
  templateUrl: "./faq-form-dialog.html",
})
export class FaqFormDialog {
  private readonly formBuilder = inject(FormBuilder);
  readonly QUESTION_MAX = 255;
  readonly RESPONSE_MAX = 1500;

  // inputs
  visible = input<boolean>(false);
  mode = input<FaqFormMode>("edit");
  item = input<FaqAdmin | null>(null);
  loadingData = input<boolean>(false);
  isSaving = input<boolean>(false);

  // outputs
  visibleChange = output<boolean>();
  cancel = output<void>();
  save = output<FaqFormPayload>();

  readonly textHeader = computed(() => {
    return this.mode() === "create"
      ? "Ajouter un élément à la FAQ"
      : "Modifier l'élément de la FAQ";
  });

  readonly submitLabel = computed(() => {
    return this.mode() === "create" ? "Ajouter" : "Modifier";
  });

  readonly form = this.formBuilder.nonNullable.group({
    question: ["", [requiredAndTrim, Validators.maxLength(this.QUESTION_MAX)]],
    response: ["", [requiredAndTrim, Validators.maxLength(this.RESPONSE_MAX)]],
  });

  constructor() {
    effect(() => {
      const mode = this.mode();

      // Create mode
      if (mode === "create") {
        this.form.reset();
        this.form.markAsPristine();
        this.form.markAsUntouched();
        return;
      }

      // Edit mode
      const item = this.item();
      if (!item) return;

      this.form.patchValue({
        question: item.question,
        response: item.answer,
      });

      this.form.markAsPristine();
      this.form.markAsUntouched();
    });

    // Disable form if loading
    effect(() => {
      if (this.loadingData() || this.isSaving()) {
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
    if (this.loadingData() || this.isSaving()) {
      this.visibleChange.emit(false);
      return;
    }

    this.handleCancel();
  }

  handleSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { question, response } = this.form.getRawValue();

    const cleanQuestion = sanitizeInput(question);
    const cleanResponse = sanitizeInput(response);

    if (!cleanQuestion || !cleanResponse) {
      this.form.patchValue(
        { question: cleanQuestion, response: cleanResponse },
        { emitEvent: false },
      );
      this.form.markAllAsTouched();
      return;
    }

    this.form.patchValue(
      {
        question: cleanQuestion,
        response: cleanResponse,
      },
      { emitEvent: false },
    );

    this.save.emit({
      question: cleanQuestion,
      answer: cleanResponse,
    });
  }
}
