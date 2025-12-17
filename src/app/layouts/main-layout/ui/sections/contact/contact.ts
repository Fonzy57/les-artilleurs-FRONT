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

// COMPONENTS
import { ButtonComponent } from "@shared/ui/button/button";

@Component({
  selector: "app-website-contact",
  imports: [
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaModule,
    ButtonComponent,
  ],
  templateUrl: "./contact.html",
})
export class Contact {
  formBuilder: FormBuilder = inject(FormBuilder);

  hasTriedSubmit = false; // validation
  isSubmitting = false; // API call
  isSuccess = false; // Send is ok

  contactForm = this.formBuilder.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    message: ["", Validators.required],
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

      console.log("Valeur du formulaire : ", this.contactForm.value);

      this.contactForm.reset();
      this.hasTriedSubmit = false;
    }, 1200);
  }

  isInvalid(controlName: string) {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && this.hasTriedSubmit);
  }
}
