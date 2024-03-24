import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordDirective } from './validators/password.directive';



@NgModule({
  declarations: [
    PasswordDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [PasswordDirective]
})
export class SharedModule { }
