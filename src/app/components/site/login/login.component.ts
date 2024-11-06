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
  instrucoes = 'Selecione o tipo de usuário para realizar login'
  loading = false



  userType: any[] = [
    { label: 'Estudante', value: 'student' },
    { label: 'Professor', value: 'teacher' },
    { label: 'Administrativo', value: 'admin' },
    { label: 'Pedagógico', value: 'pedagogico' }
  ];

  selectedUserType = ''


  model: {
    email: string;
    password: string } = { email: '', password: '' };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.loading = true
      this.instrucoes = 'Realizando login, aguarde...'

      // Aqui você pode adicionar a lógica para autenticação
      console.log('Formulário enviado com sucesso!', this.model);
    }
  }

  changeMessage() {
    if (this.selectedUserType === 'student') {
      this.instrucoes = 'Digite suas credenciais de estudante para acessar o sistema.'
      this.model.email = ''
      this.model.password = ''
    }

    if (this.selectedUserType === 'teacher') {
      this.instrucoes = 'Digite suas credenciais de professor para acessar o sistema.'
      this.model.email = ''
      this.model.password = ''
        }
    if (this.selectedUserType === 'admin') {
      this.instrucoes = 'Digite suas credenciais de administrador para acessar o sistema.'
      this.model.email = ''
      this.model.password = ''
        }
    if (this.selectedUserType === 'pedagogico') {
      this.instrucoes = 'Digite suas credenciais de coordenador(a) pedagógico(a) para acessar o sistema.'
      this.model.email = ''
      this.model.password = ''
        }
  }

  clearUserType(){
  this.selectedUserType = ''
  this.instrucoes = 'Selecione o tipo de usuário para realizar login'

  }


}
