import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  password1: string="";
  password2: string="";

  register(form: NgForm): void {
    console.log(form.value);
    
    if (form.invalid) {
      console.log("invalid register");
      return;
    }
  }

}
