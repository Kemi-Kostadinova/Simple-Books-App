import { FormGroup, ValidatorFn } from "@angular/forms";

export function validatePassword(): ValidatorFn {
    return (control) => {
      let isValid = false;

      if (control && control instanceof FormGroup) {
        let group = control as FormGroup;
        if (group.controls['password'] && group.controls['rePassword']) {
          isValid = group.controls['password'].value == group.controls['rePassword'].value;
        }
      }

      if (isValid) {
        return null;
      } else {
        return { 'passwordCheck': true }
      }
    }
  }