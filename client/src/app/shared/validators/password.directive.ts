import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { validatePassword } from './match-password-validator';

@Directive({
  selector: '[appPasswordCheck]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordDirective,
    multi: true
  }]
})
export class PasswordDirective implements Validator {

  private validateFn;

  constructor() {
    this.validateFn = validatePassword();
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validateFn(control);
  }
}