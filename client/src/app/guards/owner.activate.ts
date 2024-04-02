import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { UserService } from "../user/user.service";
import { ApiService } from "../api.service";

@Injectable({ providedIn: 'root' })
export class OwnerActivate implements CanActivate {

    constructor(private userService: UserService, private apiService: ApiService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const bookId = route.paramMap.get('bookId') || "";

        return this.apiService.getBook(bookId).pipe(
            switchMap(book => {
                const isOwner = this.userService.isOwner(book);

                if (!isOwner) {
                    this.router.navigate(['/books']);
                    return of(false);
                }

                return of(true);
            })
        );
    }
}

