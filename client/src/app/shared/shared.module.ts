import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordDirective } from './validators/password.directive';
import { ImageDirective } from './validators/image.directive';
import { LoaderComponent } from './loader/loader.component';
import { SlicePipe } from './pipes/slice.pipe';



@NgModule({
  declarations: [
    PasswordDirective,
    ImageDirective,
    LoaderComponent,
    SlicePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PasswordDirective, ImageDirective, LoaderComponent, SlicePipe]
})
export class SharedModule { }
