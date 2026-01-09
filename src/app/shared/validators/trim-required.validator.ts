import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const requiredAndTrim: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const value = control.value;

  if (typeof value !== "string") return { requiredAndTrim: true };

  return value.trim().length ? null : { requiredAndTrim: true };
};
