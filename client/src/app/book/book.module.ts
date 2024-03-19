import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { DetailsComponent } from './details/details.component';
import { BookRoutingModule } from './book-routing.module';



@NgModule({
  declarations: [
    CatalogComponent,
    AddReviewComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
