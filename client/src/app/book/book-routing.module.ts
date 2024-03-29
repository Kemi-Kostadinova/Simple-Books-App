import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { UserActivate } from '../guards/user.activate';

const routes: Routes = [{path: "books", children: [ 
    {path: "", pathMatch: "full", component: CatalogComponent},
    {path: "add", component: AddReviewComponent, canActivate: [UserActivate]},
    {path: ":bookId", component: DetailsComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }