import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { DetailsComponent } from './details/details.component';
import { BookRoutingModule } from './book-routing.module';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CatalogComponent,
    AddReviewComponent,
    DetailsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
