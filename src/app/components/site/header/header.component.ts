import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  schoolName = environment.schoolName
  frase = environment.frasePrincipal
  atendimento = environment.atendimento
  fachada = environment.fachada


}
