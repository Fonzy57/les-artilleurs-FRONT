// ANGULAR
import { AsyncPipe } from "@angular/common";
import {
  Component,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { BreakpointObserver } from "@angular/cdk/layout";
import { finalize, map, shareReplay, startWith } from "rxjs/operators";
import { timer } from "rxjs";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

// COMPONENTS
import { DashButton } from "@layouts/dashboard-layout/ui/dash-button/dash-button";

// PRIME NG
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";

// UTILS
import { requiredAndTrim } from "@shared/validators/trim-required.validator";
import { sanitizeInput } from "@shared/utils/string-sanitize";

@Component({
  standalone: true,
  selector: "app-login",
  imports: [
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    PasswordModule,
    AsyncPipe,
    DashButton,
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
  submitted = signal(false);
  isSubmitting = signal(false);

  formBuilder: FormBuilder = inject(FormBuilder);

  readonly loginForm = this.formBuilder.nonNullable.group({
    email: ["", [requiredAndTrim, Validators.email]],
    pwd: ["", requiredAndTrim],
    remember: [false],
  });

  private readonly formValue = toSignal(
    this.loginForm.valueChanges.pipe(startWith(this.loginForm.value)),
    { initialValue: this.loginForm.value },
  );

  readonly canSubmit = computed(() => {
    const values = this.formValue();
    const email = (values.email ?? "").trim();
    const pwd = (values.pwd ?? "").trim();
    return email.length > 0 && pwd.length > 0;
  });

  readonly isSubmitDisabled = computed(() => {
    return !this.canSubmit() || this.isSubmitting();
  });

  constructor() {
    effect(() => {
      this.formValue();

      if (this.isSubmitting()) return;

      const wasSubmitted = untracked(this.submitted);

      if (wasSubmitted) {
        this.submitted.set(false);
      }
    });
  }

  onSubmit() {
    if (this.isSubmitting()) return;

    this.submitted.set(true);

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.loginForm.disable({ emitEvent: false });

    const { email, pwd, remember } = this.loginForm.getRawValue();

    const cleanEmail = sanitizeInput(email);
    const cleanPwd = sanitizeInput(pwd);

    console.log("Form value:", { email: cleanEmail, pwd: cleanPwd, remember });

    // TODO A SUPPRIMER, ICI JUSTE SIMULATION DU CALL API
    timer(3000)
      .pipe(
        finalize(() => {
          this.loginForm.enable({ emitEvent: false });
          this.isSubmitting.set(false);
        }),
      )
      .subscribe(() => {
        // TODO succès
      });
  }

  isInvalid(controlName: "email" | "pwd") {
    const control = this.loginForm.get(controlName);
    return !!(control && control.invalid && this.submitted());
  }
}
