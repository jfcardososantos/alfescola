import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

interface Recado {
  title: string;
  imagem: string;
  resumo: string;
  fullText: string;
  date: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})


export class HomepageComponent implements OnInit {

  schoolName = environment.schoolName
  frase = environment.frasePrincipal
  atendimento = environment.atendimento
  fachada = environment.fachada

  banner: any[] | undefined;

  recados: Recado [] = []

  visible: boolean = false

  recadosExibidos = 3


  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  selectedItem: any


  ngOnInit() {



        this.banner = [
          {
            itemImageSrc: '../../../../assets/fachadas/fachada.JPG',
            thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
          itemImageSrc: '../../../../assets/logos/eemtv.png',
          thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
          alt: 'Description for Image 1',
          title: 'Title 1'
      },
        ]

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
