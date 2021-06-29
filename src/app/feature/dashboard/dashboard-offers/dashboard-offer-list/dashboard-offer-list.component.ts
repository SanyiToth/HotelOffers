import { Component, OnInit } from '@angular/core';
import { Offer } from "../../../../shared/services/offers/offer.interface";
import { OffersService } from "../../../../shared/services/offers/offers.service";
import { OfferStatus } from "../../../../shared/services/offers/offer-status";

@Component({
  selector: 'app-dashboard-offer-list',
  templateUrl: './dashboard-offer-list.component.html',
  styleUrls: ['./dashboard-offer-list.component.scss']
})
export class DashboardOfferListComponent implements OnInit {

  offers: Offer[] = []

  constructor(private offerService: OffersService) { }

  ngOnInit(): void {
    this.offerService.getOffers().subscribe(data => {
      this.offers = data;
    })
  }

}
