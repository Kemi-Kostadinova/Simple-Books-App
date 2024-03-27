import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { imageValidator } from './image-validator';

@Directive({
  selector: '[appImage]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ImageDirective,
    multi: true
  }]
})
export class ImageDirective implements Validator {

  private validateFn;

  constructor() {
    this.validateFn = imageValidator();
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validateFn(control);
  }

}
