import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  schoolName = environment.schoolName
  frase = environment.frasePrincipal
  atendimento = environment.atendimento
  fachada = environment.fachada

}
