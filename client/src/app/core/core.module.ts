import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigationComponent, FooterComponent]
})
export class CoreModule { }
