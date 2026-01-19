// ANGULAR
import { Component, effect, inject, OnInit, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

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

  editIsClicked = signal<boolean>(false);

  ngOnInit(): void {
    this.clubInfoAdminService.loadingClubInfos();
  }

  readonly clubForm = this.formBuilder.nonNullable.group({
    stadiumName: [
      "",
      [
        requiredAndTrim,
        Validators.maxLength(this.STADIUM_NAME_LENGTH),
        Validators.required,
      ],
    ],
    street: [
      "",
      [
        requiredAndTrim,
        Validators.maxLength(this.STREET_LENGTH),
        Validators.required,
      ],
    ],
    city: [
      "",
      [
        requiredAndTrim,
        Validators.maxLength(this.CITY_LENGTH),
        Validators.required,
      ],
    ],
    postalCode: [
      "",
      [
        requiredAndTrim,
        Validators.maxLength(this.POSTAL_CODE_LENGTH),
        Validators.required,
      ],
    ],
    clubName: [
      "",
      [
        requiredAndTrim,
        Validators.maxLength(this.CLUB_NAME_LENGTH),
        Validators.required,
      ],
    ],
    contactEmail: [
      "",
      [
        requiredAndTrim,
        Validators.email,
        Validators.maxLength(this.CONTACT_EMAIL_LENGTH),
        Validators.required,
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

  /* 
    TODO
    - BIEN FAIRE LA VERIFICATION DE L'EMAIL COMME INPUT
  */
  clickEdit(): void {
    this.editIsClicked.set(true);
    this.clubForm.enable();
  }

  handleSubmit(): void {
    /* TODO VOIR QUAND JE RENDS LE FORMULAIRE DISABLE, A MON AVIS QUE S'IL N'Y A PAS D'ERREURS */
    this.editIsClicked.set(false);
    console.log(
      "J'envoie le formulaire avec comme données : ",
      this.clubForm.value,
    );
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
    this.editIsClicked.set(false);
  }

  isInvalid(name: string): boolean {
    const control = this.clubForm.get(name);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}
