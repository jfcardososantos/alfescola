import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  logo = environment.schoolLogo
  schoolName = environment.schoolName

  model: {
    email: string;
    password: string } = { email: '', password: '' };

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Aqui você pode adicionar a lógica para autenticação
      console.log('Formulário enviado com sucesso!', this.model);
    }
  }

}
