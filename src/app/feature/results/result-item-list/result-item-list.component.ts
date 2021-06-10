import { Component, OnInit } from '@angular/core';
import { OffersService } from "../../../shared/services/offers/offers.service";
import { Offer } from "../../../shared/services/offers/offer.interface";

@Component({
  selector: 'app-result-item-list',
  templateUrl: './result-item-list.component.html',
  styleUrls: ['./result-item-list.component.css']
})
export class ResultItemListComponent implements OnInit {

  public items: Offer[] = [];

  constructor(private item: OffersService) {}

  ngOnInit(): void {
    this.item.getOffers().subscribe(data => {
      this.items = data;
    });
  }
}
