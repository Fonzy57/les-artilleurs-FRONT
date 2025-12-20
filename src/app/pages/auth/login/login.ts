// ANGULAR
import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

// COMPONENTS
import { ButtonComponent } from "@shared/ui/button/button";

// PRIME NG
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";

@Component({
  standalone: true,
  selector: "app-login",
  imports: [
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    ButtonComponent,
    PasswordModule,
    AsyncPipe,
  ],
  templateUrl: "./login.html",
})
export class Login {
  /* Observes the viewport width to control DOM rendering.
  to enforce a desktop-only UX (not a security constraint). */
  private readonly breakpointObserver = inject(BreakpointObserver);

  /* The login form is only rendered for screens >= 1440px */
  readonly isLaptop$ = this.breakpointObserver
    .observe(["(min-width: 1440px)"])
    .pipe(
      map((r) => r.matches),
      shareReplay({ bufferSize: 1, refCount: true }),
    );

  /* ------------ */
  /* --- FORM --- */
  /* ------------ */
  formBuilder: FormBuilder = inject(FormBuilder);

  loginForm = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    pwd: ["", Validators.required],
    remember: [false],
  });

  /* TODO REFAIRE LE ON SUBMIT QUAND API FINIE */
  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log("Form value : ", this.loginForm.value);
  }

  isInvalid(controlName: string) {
    const control = this.loginForm.get(controlName);
    return !!(control && control.invalid);
  }
}
