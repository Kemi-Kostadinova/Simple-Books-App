import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [{ path: "", pathMatch: "full", redirectTo: "/home" },
{ path: "home", component: HomeComponent },
{ path: "error", component: ErrorComponent },
{ path: "auth", loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
{ path: "books", loadChildren: () => import('./book/book.module').then((m) => m.BookModule) },
{ path: "**", pathMatch: "full", redirectTo: "/404" },
{ path: "404", component: ErrorPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
