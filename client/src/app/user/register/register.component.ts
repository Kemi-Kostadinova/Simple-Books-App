import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  password1: string="";
  password2: string="";

  constructor(private userService: UserService, private router: Router) {}

  register(form: NgForm): void {
    
    if (form.invalid) {
      console.log("invalid register");
      return;
    }

    const { username, email, passwords: { password, rePassword } } = form.value;

    this.userService.register(username, email, password, rePassword).subscribe(() => {
      this.router.navigate(["/books"])
    })
  }

}
