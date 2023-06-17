import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {
    username: '',
    password: ''
  };
  showPassword: boolean = false;

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      // Perform login logic
      // You can add your own implementation here, such as calling an API for authentication

      // Reset the form
      loginForm.resetForm();

      // Clear the user object
      this.user = {
        username: '',
        password: ''
      };
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
