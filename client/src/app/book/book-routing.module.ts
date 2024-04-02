import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { UserActivate } from '../guards/user.activate';
import { EditComponent } from './edit/edit.component';
import { OwnerActivate } from '../guards/owner.activate';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CatalogComponent },
  { path: "add", component: AddReviewComponent, canActivate: [UserActivate] },
  { path: ":bookId", component: DetailsComponent },
  { path: ":bookId/edit", component: EditComponent, canActivate: [OwnerActivate] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }