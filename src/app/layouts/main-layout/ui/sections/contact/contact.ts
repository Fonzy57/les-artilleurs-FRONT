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

@Component({
  selector: "app-website-contact",
  imports: [
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaModule,
  ],
  templateUrl: "./contact.html",
})
export class Contact {
  formBuilder: FormBuilder = inject(FormBuilder);
  formSubmitted = false;

  contactForm = this.formBuilder.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    message: ["", Validators.required],
  });

  /* TODO FAIRE LA VERIFICATION DES CHAMPS EN FRONT ET EN BACK - MESSAGE D'ERREUR SERONT ENVOYES PAR L'API */
  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      /* TODO PLUS TARD AJOUTER LES TAOSTS MESSAGE */
      /* this.messageService.add({
        severity: "success",
        summary: "Success",
        detail: "Form Submitted",
        life: 3000,
      }); */
      this.contactForm.reset();
      this.formSubmitted = false;
    }
  }

  isInvalid(controlName: string) {
    const control = this.contactForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }
}
