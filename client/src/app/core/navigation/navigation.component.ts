import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private userService: UserService, private route:Router) {}

  get isLoggedIn(): boolean {
    console.log(this.userService.isLogged);
    
    return this.userService.isLogged;
  }

  logout() {
    this.userService.logout().subscribe(() => {
      this.route.navigate(["/home"])
    });
  }
}
