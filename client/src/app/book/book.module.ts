import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { DetailsComponent } from './details/details.component';
import { BookRoutingModule } from './book-routing.module';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CatalogComponent,
    AddReviewComponent,
    DetailsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class BookModule { }
