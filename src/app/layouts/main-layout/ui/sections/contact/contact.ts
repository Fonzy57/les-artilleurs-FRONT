// ANGULAR
import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";

// PRIME NG
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TextareaModule } from "primeng/textarea";
import { CheckboxModule } from "primeng/checkbox";

// COMPONENTS
import { ButtonComponent } from "@shared/ui/button/button";

// SERVICES
import { ToastService } from "@shared/ui/toast/toast.service";

@Component({
  selector: "app-website-contact",
  imports: [
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaModule,
    CheckboxModule,
    ButtonComponent,
  ],
  templateUrl: "./contact.html",
})
export class Contact {
  formBuilder: FormBuilder = inject(FormBuilder);
  private toast = inject(ToastService);

  hasTriedSubmit = false; // validation
  isSubmitting = false; // API call
  isSuccess = false; // Send is ok

  contactForm = this.formBuilder.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    message: ["", Validators.required],
    consent: [false, Validators.requiredTrue],
  });

  /* TODO FAIRE LA VERIFICATION DES CHAMPS EN FRONT ET EN BACK - MESSAGE D'ERREUR SERONT ENVOYES PAR L'API */
  onSubmit() {
    this.hasTriedSubmit = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    if (this.isSubmitting || this.isSuccess) return;

    this.isSubmitting = true;

    // Simulation d'appel API
    // Remplacer par call API en http
    // TODO SUPPRIMER QUAND API FINIE
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSuccess = true;
      this.contactForm.disable();

      /* TODO SUPPRIMER QUAND TESTS FINIS */
      console.log("Valeur du formulaire : ", this.contactForm.value);

      /* TODO REVOIR LE MESSAGE */
      /* this.toast.success("Message envoyé", "Message envoyé avec succès !", {
        sticky: true,
        position: "bottom-center",
      }); */

      this.hasTriedSubmit = false;
    }, 1200);
  }

  isInvalid(controlName: string) {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && this.hasTriedSubmit);
  }

  resetForm() {
    this.contactForm.enable(); // réactive les champs
    this.contactForm.reset({
      name: "",
      email: "",
      message: "",
      consent: false,
    });

    this.isSuccess = false;
    this.hasTriedSubmit = false;
  }
}
