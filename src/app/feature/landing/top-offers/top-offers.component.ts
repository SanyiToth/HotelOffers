import { Component, OnInit } from '@angular/core';
import {Offer} from "./offer.interface";

@Component({
  selector: 'app-top-offers',
  templateUrl: './top-offers.component.html',
  styleUrls: ['./top-offers.component.scss']
})
export class TopOffersComponent implements OnInit {

  offers: Offer[];
  responsiveOptions: any[];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ]

    this.offers = [
      {
        id: 1,
        name: 'Offer heading 1',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 39500,
        image: 'https://picsum.photos/id/25/1000/500'
      },
      {
        id: 2,
        name: 'Offer heading 2',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 39500,
        image: 'https://picsum.photos/id/36/1000/500'
      },
      {
        id: 3,
        name: 'Offer heading 3',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 39500,
        image: 'https://picsum.photos/id/85/1000/500'
      },
      {
        id: 4,
        name: 'Offer heading 4',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 39500,
        image: 'https://picsum.photos/id/33/1000/500'
      },
      {
        id: 5,
        name: 'Offer heading 5',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 39500,
        image: 'https://picsum.photos/id/98/1000/500'
      }
    ]
  }

  ngOnInit(): void {
  }

}
