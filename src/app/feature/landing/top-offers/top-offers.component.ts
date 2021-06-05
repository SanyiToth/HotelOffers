import {Component, Input, OnInit} from '@angular/core';
import {Offer} from "../../../shared/services/offers/offer.interface";

@Component({
  selector: 'app-top-offers',
  templateUrl: './top-offers.component.html',
  styleUrls: ['./top-offers.component.scss']
})
export class TopOffersComponent implements OnInit {

  @Input() offers: Offer[] = [];
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
  }

  ngOnInit(): void {
  }

}
