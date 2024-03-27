import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordDirective } from './validators/password.directive';
import { ImageDirective } from './validators/image.directive';



@NgModule({
  declarations: [
    PasswordDirective,
    ImageDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [PasswordDirective, ImageDirective]
})
export class SharedModule { }
