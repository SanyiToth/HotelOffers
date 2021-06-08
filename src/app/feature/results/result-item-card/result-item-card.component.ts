import { Component, OnInit } from '@angular/core';
import { Offer } from "../../../shared/services/offers/offer.interface";
import { OffersService } from "../../../shared/services/offers/offers.service";


@Component({
  selector: 'app-result-item-card',
  templateUrl: './result-item-card.component.html',
  styleUrls: ['./result-item-card.component.scss']
})
export class ResultItemCardComponent implements OnInit {

  public infos: Offer[] = [];

  constructor(private info: OffersService) { }

  ngOnInit(): void {
    this.info.getOffers().subscribe(data => {
      this.infos = data;
    });
  }

}
