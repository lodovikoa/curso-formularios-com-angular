import { AbstractControl, isFormArray, ValidationErrors } from "@angular/forms";

export function avoidRepeatedEmail(control: AbstractControl): ValidationErrors | null {
  const isFormArrayInstance = isFormArray(control.parent);

  if(!isFormArrayInstance) { return null}

  const formArray = control.parent;
  if(formArray.controls.length < 2) { return null }

  const exists = formArray.controls
    .filter((item) => item != control)
    .some((item) => item.value === control.value);
  if(exists) { return {
      repeatedEmail: true }
    }

  return null;
}
