import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isNavActive = false;

  constructor(private userService: UserService, private route: Router) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  toggleNav(): void {
    this.isNavActive = !this.isNavActive;
  }

  logout() {
    this.userService.logout().subscribe(() => {
      this.route.navigate(["/home"])
    });
  }
}
