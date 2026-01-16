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
import { TextareaModule } from "primeng/textarea";
import { InputTextModule } from "primeng/inputtext";
import { RadioButton } from "primeng/radiobutton";
import { Tooltip } from "primeng/tooltip";

// COMPONENTS
import { InputSkeleton } from "@shared/ui/skeleton/form/input-skeleton/input-skeleton";
import { ButtonSkeleton } from "@shared/ui/skeleton/button-skeleton/button-skeleton";
import { DashButton } from "@layouts/dashboard-layout/ui/dash-button/dash-button";

// MODELS
import { InfoBlockAdmin } from "@shared/models/info-block.model";

// UTILS
import { sanitizeInput } from "@shared/utils/string-sanitize";

// CUSTOM VALIDATORS
import { requiredAndTrim } from "@shared/validators/trim-required.validator";

// TYPES
export type InfoBlockFormMode = "edit" | "create";

export type InfoBlockPayload = {
  content: string;
  slot: number | null;
};

@Component({
  standalone: true,
  selector: "app-info-block-form-dialog",
  imports: [
    Dialog,
    InputSkeleton,
    ButtonSkeleton,
    ReactiveFormsModule,
    TextareaModule,
    NgClass,
    InputTextModule,
    DashButton,
    RadioButton,
    Tooltip,
  ],
  templateUrl: "./info-block-form-dialog.html",
})
export class InfoBlockFormDialog {
  private readonly formBuilder = inject(FormBuilder);
  readonly CONTENT_MAX_LENGTH = 255;

  // INPUTS
  visible = input<boolean>(false);
  mode = input<InfoBlockFormMode>("edit");
  item = input<InfoBlockAdmin | null>(null);
  loadingData = input<boolean>(false);
  isSaving = input<boolean>(false);
  error = input<boolean>(false);

  // OUTPUTS
  visibleChange = output<boolean>();
  cancel = output<void>();
  save = output<InfoBlockPayload>();

  // HEADER & BUTTON LABEL
  readonly dialogTitle = computed(() =>
    this.mode() === "create" ? "Ajouter une info" : "Modifier l’info",
  );

  readonly submitLabel = computed(() =>
    this.mode() === "create" ? "Ajouter" : "Modifier",
  );

  readonly shouldDisableForm = computed(
    () => this.loadingData() || this.isSaving() || this.error(),
  );

  readonly slotOptions = [
    { label: "Ne pas le définir", value: null },
    { label: "Slot 1", value: 1 },
    { label: "Slot 2", value: 2 },
    { label: "Slot 3", value: 3 },
    { label: "Slot 4", value: 4 },
  ];

  // FORM
  readonly form = this.formBuilder.nonNullable.group({
    content: [
      "",
      [requiredAndTrim, Validators.maxLength(this.CONTENT_MAX_LENGTH)],
    ],
    slot: [null as number | null],
  });

  constructor() {
    // Sync form with mode / item
    effect(() => {
      const mode = this.mode();

      if (mode === "create") {
        this.form.reset({ content: "", slot: null });
        this.form.markAsPristine();
        this.form.markAsUntouched();
        return;
      }

      const item = this.item();
      if (!item) return;

      this.form.patchValue({
        content: item.content,
        slot: item.slot,
      });

      this.form.markAsPristine();
      this.form.markAsUntouched();
    });

    // Disable form when loading or saving
    effect(() => {
      if (this.shouldDisableForm()) {
        this.form.disable({ emitEvent: false });
      } else {
        this.form.enable({ emitEvent: false });
      }
    });
  }

  isInvalid(name: "content" | "slot"): boolean {
    const control = this.form.get(name);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onHide(): void {
    if (this.loadingData() || this.isSaving()) {
      this.visibleChange.emit(false);
      return;
    }
    this.handleCancel();
  }

  charCount(): number {
    return this.form.controls.content.value.length;
  }

  handleCancel(): void {
    this.form.reset();
    this.visibleChange.emit(false);
    this.cancel.emit();
  }

  handleSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { content, slot } = this.form.getRawValue();

    const cleanContent = sanitizeInput(content);
    const cleanSlot: number | null = slot ?? null;

    if (!cleanContent) {
      this.form.patchValue(
        { content: cleanContent, slot: cleanSlot },
        { emitEvent: false },
      );
      this.form.markAllAsTouched();
      return;
    }

    this.form.patchValue(
      { content: cleanContent, slot: cleanSlot },
      { emitEvent: false },
    );

    this.save.emit({
      content: cleanContent,
      slot: cleanSlot,
    });
  }
}
