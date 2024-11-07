import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrl: './albuns.component.scss'
})
export class AlbunsComponent implements OnInit {

  albuns: any
  selectedItem: any
  visible: boolean = false

  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  ngOnInit(): void {
    this.albuns = [
      {
        title: 'Título do álbum',
        preview: '../../../../assets/fachadas/fachada.JPG',
        description: 'Descrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldear',
        photos: ['https://conteudo.imguol.com.br/c/esporte/6c/2024/11/06/david-luiz-comemora-gol-em-cruzeiro-x-flamengo-duelo-do-campeonato-brasileiro-1730943574805_v2_450x337.jpg.webp',
          'https://conteudo.imguol.com.br/c/parceiros/3b/2024/03/27/saiba-o-que-e-taxa-selic-e-como-sua-alta-e-baixa-afeta-as-financas-pessoais-1711539011830_v2_300x225.jpg.webp'
        ]
      },
      {
        title: 'Título do álbum',
        preview: '../../../../assets/fachadas/fachada.JPG',
        description: 'Descrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldear',
        photos: ['https://conteudo.imguol.com.br/c/esporte/6c/2024/11/06/david-luiz-comemora-gol-em-cruzeiro-x-flamengo-duelo-do-campeonato-brasileiro-1730943574805_v2_450x337.jpg.webp',
          'https://conteudo.imguol.com.br/c/parceiros/3b/2024/03/27/saiba-o-que-e-taxa-selic-e-como-sua-alta-e-baixa-afeta-as-financas-pessoais-1711539011830_v2_300x225.jpg.webp'
        ]
      },
      {
        title: 'Título do álbum',
        preview: '../../../../assets/fachadas/fachada.JPG',
        description: 'Descrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldear',
        photos: ['https://conteudo.imguol.com.br/c/esporte/6c/2024/11/06/david-luiz-comemora-gol-em-cruzeiro-x-flamengo-duelo-do-campeonato-brasileiro-1730943574805_v2_450x337.jpg.webp',
          'https://conteudo.imguol.com.br/c/parceiros/3b/2024/03/27/saiba-o-que-e-taxa-selic-e-como-sua-alta-e-baixa-afeta-as-financas-pessoais-1711539011830_v2_300x225.jpg.webp'
        ]
      },
      {
        title: 'Título do álbum',
        preview: '../../../../assets/fachadas/fachada.JPG',
        description: 'Descrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldear',
        photos: ['https://conteudo.imguol.com.br/c/esporte/6c/2024/11/06/david-luiz-comemora-gol-em-cruzeiro-x-flamengo-duelo-do-campeonato-brasileiro-1730943574805_v2_450x337.jpg.webp',
          'https://conteudo.imguol.com.br/c/parceiros/3b/2024/03/27/saiba-o-que-e-taxa-selic-e-como-sua-alta-e-baixa-afeta-as-financas-pessoais-1711539011830_v2_300x225.jpg.webp'
        ]
      },
      {
        title: 'Título do álbum',
        preview: '../../../../assets/fachadas/fachada.JPG',
        description: 'Descrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldear',
        photos: ['https://conteudo.imguol.com.br/c/esporte/6c/2024/11/06/david-luiz-comemora-gol-em-cruzeiro-x-flamengo-duelo-do-campeonato-brasileiro-1730943574805_v2_450x337.jpg.webp',
          'https://conteudo.imguol.com.br/c/parceiros/3b/2024/03/27/saiba-o-que-e-taxa-selic-e-como-sua-alta-e-baixa-afeta-as-financas-pessoais-1711539011830_v2_300x225.jpg.webp'
        ]
      },
      {
        title: 'Título do álbum',
        preview: '../../../../assets/fachadas/fachada.JPG',
        description: 'Descrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldearDescrição do álbum Lorem ipsum, Lorem ipsum aldear',
        photos: ['https://conteudo.imguol.com.br/c/esporte/6c/2024/11/06/david-luiz-comemora-gol-em-cruzeiro-x-flamengo-duelo-do-campeonato-brasileiro-1730943574805_v2_450x337.jpg.webp',
          'https://conteudo.imguol.com.br/c/parceiros/3b/2024/03/27/saiba-o-que-e-taxa-selic-e-como-sua-alta-e-baixa-afeta-as-financas-pessoais-1711539011830_v2_300x225.jpg.webp'
        ]
      }
    ]
  }

  showDialog(item: any) {
    this.selectedItem = item
    this.visible = true;
    console.log(this.selectedItem)
  }


}
