import { Component, OnInit } from '@angular/core';
import { OffersService } from "../../../shared/services/offers/offers.service";
import {Offer} from "../../../shared/services/offers/offer.interface";


@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.scss']
})
export class ResultsContainerComponent implements OnInit {

  public items: Offer[] = [];

  constructor(private item: OffersService) { }

  ngOnInit(): void {
    this.item.getOffers().subscribe(data => {
      this.items = data;
    });
  }
}
