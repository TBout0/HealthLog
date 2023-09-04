import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public user = { name: '', email: '', password: '', comfirmPassword: '' };
  public rememberMe = false;
  Register() {
    console.log(this.rememberMe);
  }
}
