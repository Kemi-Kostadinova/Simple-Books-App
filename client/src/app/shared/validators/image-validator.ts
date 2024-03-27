import { ValidatorFn } from "@angular/forms";

export function imageValidator(): ValidatorFn {
    const regExp = new RegExp(/^https?:\/\//);

    return (control) => {
        return control.value === "" || regExp.test(control.value) ? null: {"imageValidator": true};
    }
}