import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  signup_name = '';
  signup_email = '';
  login_email = '';

  constructor(private authService: AuthService) { }

  signup() {
    if (this.signup_name && this.signup_email) {
      this.authService.signup(this.signup_name, this.signup_email);
    }
  }

  login() {
    if(this.login_email) {
      this.authService.login(this.login_email)
    }
  }
}
