import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {
    username: '',
    password: '',
    confirmPassword: ''
  };
  showSuccessPopup: boolean = false;
  showPassword: boolean = false;

  // onSubmit(registerForm: NgForm) {
  //   if (registerForm.valid && this.user.password === this.user['confirmPassword']) {
  //     // Perform registration logic here, e.g., calling an API

  //     // Show success popup
  //     this.showSuccessPopup = true;
  //   }
  // }

  // closeSuccessPopup() {
  //   this.showSuccessPopup = false;
  // }


  onSubmit(registerForm: NgForm) {
    if (registerForm.valid) {
      // Perform registration logic
      // Display a success message
      alert('Registration successful!');
    }
  }


  // togglePasswordVisibility(field: string): void {
  //   if (field === 'password') {
  //     this.showPassword = !this.showPassword;
  //   }
  //   else if (field === 'confirmPassword') {
  //     // Handle toggling for the confirm password field if needed
  //   }
  // }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
