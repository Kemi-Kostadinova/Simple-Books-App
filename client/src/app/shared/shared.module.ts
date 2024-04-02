import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordDirective } from './validators/password.directive';
import { ImageDirective } from './validators/image.directive';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    PasswordDirective,
    ImageDirective,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PasswordDirective, ImageDirective, LoaderComponent]
})
export class SharedModule { }
