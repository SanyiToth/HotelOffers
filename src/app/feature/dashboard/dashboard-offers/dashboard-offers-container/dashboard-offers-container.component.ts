import { Component, OnInit } from '@angular/core';
import { Offer } from "../../../../shared/services/offers/offer.interface";
import { OffersService } from "../../../../shared/services/offers/offers.service";

@Component({
  selector: 'app-dashboard-offers-container',
  templateUrl: './dashboard-offers-container.component.html',
  styleUrls: ['./dashboard-offers-container.component.scss']
})
export class DashboardOffersContainerComponent implements OnInit {

  data!: Offer[]

  constructor(private offers: OffersService) { }

  ngOnInit(): void {
    this.offers.getOffers().subscribe(data => {
      this.data = data;
      console.log("all offers:", data)
    })
  }

}
