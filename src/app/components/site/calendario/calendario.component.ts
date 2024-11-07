import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent {

  date: Date[] | undefined;

responsiveOptions = [
  {
      breakpoint: '1024px',
      numMonths: 3
  },
  {
      breakpoint: '768px',
      numMonths: 2
  },
  {
      breakpoint: '560px',
      numMonths: 1
  }
];

}
