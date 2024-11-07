import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.scss'
})
export class BannersComponent implements OnInit {

  banner: any[] | undefined;

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

  ngOnInit(): void {

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

  }


}
