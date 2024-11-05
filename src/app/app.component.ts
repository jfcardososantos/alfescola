import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  title = 'alfescola';

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.primengConfig.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',
      firstDayOfWeek: 0,
      dayNames: ["domingo","segunda","terça","quarta","quinta","sexta","sábado"],
      dayNamesShort: ["dom","seg","ter","qua","qui","sex","sáb"],
      dayNamesMin: ["D","S","T","Q","Q","S","S"],
      monthNames: ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],
      monthNamesShort: ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],
      today: 'Hoje',
      clear: 'Limpar',
      weekHeader: "Sm",
      emptySearchMessage: "Nenhum resultado encontrado",
      emptyFilterMessage: "Nenhum resultado encontrado",
    });

}



}
