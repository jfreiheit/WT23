import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  usernameFC = new FormControl('', Validators.required);
  passwordFC = new FormControl('', Validators.required);
  emailFC = new FormControl('', [Validators.required, Validators.email]);
  roleFC = new FormControl('', Validators.required);

  register() {
    console.log('button geklickt')

    if(this.usernameFC.valid) {
      console.log('valid')
    }
    else {
      console.log('invalid');
      if(this.usernameFC.errors?.['required']) console.log('username required')
    }
    let usernameValue = this.usernameFC.value;
    let passwordValue = this.passwordFC.value;
    let emailValue = this.emailFC.value;
    let roleValue = this.roleFC.value;

    let user = {
      username: usernameValue,
      password: passwordValue,
      email: emailValue,
      role: roleValue
    }

    console.log('user : ', user)
  }
}
