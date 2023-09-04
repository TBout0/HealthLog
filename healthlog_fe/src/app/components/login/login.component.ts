import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public user = { email: '', password: '' };
  public rememberMe = false;
  Login() {
    console.log(this.rememberMe);
  }
}
