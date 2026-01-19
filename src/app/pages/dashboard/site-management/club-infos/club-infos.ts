// ANGULAR
import { Component, effect, inject, OnInit, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

// PRIME NG
import { InputTextModule } from "primeng/inputtext";
import { DividerModule } from "primeng/divider";

// COMPONENTS
import { DashButton } from "@layouts/dashboard-layout/ui/dash-button/dash-button";
import { ActionIconButton } from "@layouts/dashboard-layout/ui/action-icon-button/action-icon-button";
import { ClubFormSkeleton } from "./club-form-skeleton/club-form-skeleton";

// SERVICE
import { ClubInfoAdminService } from "app/data-access/admin/club/club-info-admin.service";

// UTILS
import { requiredAndTrim } from "@shared/validators/trim-required.validator";
import { sanitizeInput } from "@shared/utils/string-sanitize";

@Component({
  standalone: true,
  selector: "app-management-club-infos",
  imports: [
    InputTextModule,
    DividerModule,
    DashButton,
    ActionIconButton,
    ReactiveFormsModule,
    ClubFormSkeleton,
    CommonModule,
  ],
  templateUrl: "./club-infos.html",
})
export class ClubInfosManagement implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  readonly clubInfoAdminService = inject(ClubInfoAdminService);
  readonly infos = this.clubInfoAdminService.clubInfos;

  readonly STADIUM_NAME_LENGTH = 100;
  readonly STREET_LENGTH = 150;
  readonly CITY_LENGTH = 80;
  readonly POSTAL_CODE_LENGTH = 5;
  readonly CLUB_NAME_LENGTH = 100;
  readonly CONTACT_EMAIL_LENGTH = 150;

  isEditing = signal<boolean>(false);

  ngOnInit(): void {
    this.clubInfoAdminService.loadingClubInfos();
  }

  readonly clubForm = this.formBuilder.nonNullable.group({
    stadiumName: [
      "",
      [requiredAndTrim, Validators.maxLength(this.STADIUM_NAME_LENGTH)],
    ],
    street: ["", [requiredAndTrim, Validators.maxLength(this.STREET_LENGTH)]],
    city: ["", [requiredAndTrim, Validators.maxLength(this.CITY_LENGTH)]],
    postalCode: ["", [requiredAndTrim, Validators.pattern(/^\d{5}$/)]],
    clubName: [
      "",
      [requiredAndTrim, Validators.maxLength(this.CLUB_NAME_LENGTH)],
    ],
    contactEmail: [
      "",
      [
        requiredAndTrim,
        Validators.email,
        Validators.maxLength(this.CONTACT_EMAIL_LENGTH),
      ],
    ],
  });

  constructor() {
    effect(() => {
      const data = this.infos();
      if (!data) return;

      this.clubForm.patchValue(
        {
          stadiumName: data.stadiumName,
          street: data.street,
          city: data.city,
          postalCode: data.postalCode,
          clubName: data.clubName,
          contactEmail: data.contactEmail,
        },
        { emitEvent: false },
      );

      this.clubForm.markAsPristine();
      this.clubForm.markAsUntouched();
      this.clubForm.disable({ emitEvent: false });
    });
  }

  clickEdit(): void {
    this.isEditing.set(true);
    this.clubForm.enable({ emitEvent: false });
  }

  handleSubmit(): void {
    if (this.clubForm.invalid) {
      this.clubForm.markAllAsTouched();
      return;
    }

    if (!this.isEditing()) return;

    const raw = this.clubForm.getRawValue();

    const cleanedForm = {
      stadiumName: sanitizeInput(raw.stadiumName),
      street: sanitizeInput(raw.street),
      city: sanitizeInput(raw.city),
      postalCode: sanitizeInput(raw.postalCode),
      clubName: sanitizeInput(raw.clubName),
      contactEmail: sanitizeInput(raw.contactEmail),
    };

    const hasEmpty = Object.values(cleanedForm).some((v) => !v);
    if (hasEmpty) {
      this.clubForm.patchValue(cleanedForm, { emitEvent: false });
      this.clubForm.markAllAsTouched();
      return;
    }

    this.clubForm.patchValue(cleanedForm, { emitEvent: false });

    this.clubInfoAdminService.upsertClubInfos(cleanedForm).subscribe({
      next: () => {
        this.isEditing.set(false);
      },
    });
  }

  handleCancel() {
    const data = this.infos();
    if (!data) return;

    this.clubForm.reset(
      {
        stadiumName: data.stadiumName,
        street: data.street,
        city: data.city,
        postalCode: data.postalCode,
        clubName: data.clubName,
        contactEmail: data.contactEmail,
      },
      { emitEvent: false },
    );

    this.clubForm.markAsPristine();
    this.clubForm.markAsUntouched();
    this.clubForm.disable();
    this.isEditing.set(false);
  }

  isInvalid(name: string): boolean {
    const control = this.clubForm.get(name);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}
