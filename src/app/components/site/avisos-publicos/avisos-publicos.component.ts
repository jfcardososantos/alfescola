import { Component, OnInit } from '@angular/core';



interface Recado {
  title: string;
  imagem: string;
  resumo: string;
  fullText: string;
  date: string;
}

@Component({
  selector: 'app-avisos-publicos',
  templateUrl: './avisos-publicos.component.html',
  styleUrl: './avisos-publicos.component.scss'
})
export class AvisosPublicosComponent implements OnInit {


  recados: Recado [] = []

  visible: boolean = false

  recadosExibidos = 3



  selectedItem: any




  ngOnInit(): void {

    this.recados = [
      {
        title: 'Notícia 01',
        imagem: '../../../../assets/fachadas/fachada.JPG',
        resumo: 'Aconteceu essa semana na escola',
        fullText: '',
        date: '2024-11-06T18:53:36.443Z'
      },
      {
        title: 'Notícia 02',
        imagem: '../../../../assets/logos/galileu-logo.png',
        resumo: 'Description for Image 1',
        fullText: 'Lorem ipsum Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...',
        date: '2024-11-06T18:53:36.443Z'
      },
      {
        title: 'Notícia 01',
        imagem: '../../../../assets/fachadas/fachada.JPG',
        resumo: 'Aconteceu essa semana na escola',
        fullText: '',
        date: '2024-11-06T18:53:36.443Z'
      },
      {
        title: 'Notícia 03',
        imagem: '../../../../assets/logos/galileu-logo.png',
        resumo: 'Description for Image 3',
        fullText: 'Lorem ipsum Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...',
        date: '2024-11-06T18:53:36.443Z'
      },
      {
        title: 'Notícia 05',
        imagem: '../../../../assets/fachadas/fachada.JPG',
        resumo: 'Aconteceu essa semana na escola',
        fullText: '',
        date: '2024-11-06T18:53:36.443Z'
      },
      {
        title: 'Notícia 99',
        imagem: '../../../../assets/logos/galileu-logo.png',
        resumo: 'Description for  1',
        fullText: 'Lorem ipsum Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...',
        date: '2024-11-06T18:53:36.443Z'
      },
    ]

  }


  showDialog(item: any) {
    this.selectedItem = item
    this.visible = true;
  }

  showMore() {
    this.recadosExibidos += 3; // Adiciona mais 5 avisos à quantidade exibida
  }



}
