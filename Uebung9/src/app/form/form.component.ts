import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    username = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    email = new FormControl('', [Validators.required, Validators.email]);
    role = new FormControl('', [Validators.required]);

    getErrorMessageUsername(){
      if(this.username.hasError('required')) return 'Bitte ausfüllen';
      else return '';
    }

    getErrorMessagePassword(){
      if(this.password.hasError('required')) return 'Bitte ausfüllen';
      else if(this.password.hasError('minlength')) return 'Mindestens 8 Zeichen';
      else return '';
    }

    getErrorMessageEmail(){
      if(this.email.hasError('required')) return 'Bitte ausfüllen';
      else if(this.email.hasError('email')) return 'Keine gültige E-Mail-Adresse';
      else return '';
    }

    getErrorMessageRole(){
      if(this.role.hasError('required')) return 'Bitte ausfüllen';
      else return '';
    }

    formInvalid() {
      return this.username.invalid || this.password.invalid || this.email.invalid || this.role.invalid;
    }

    register() {
      if(!this.formInvalid())
      {
        let user = {
          username: this.username.value,
          password: this.password.value,
          email: this.email.value,
          role: this.role.value
        }

        console.log('user', user)
      }
    }
}
