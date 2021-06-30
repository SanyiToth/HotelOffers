import { Component, OnInit } from '@angular/core';
import { Offer } from "../../../../shared/services/offers/offer.interface";
import { OffersService } from "../../../../shared/services/offers/offers.service";
import { Status } from "../../../../shared/services/offers/offer-status";

@Component({
  selector: 'app-dashboard-offer-list',
  templateUrl: './dashboard-offer-list.component.html',
  styleUrls: ['./dashboard-offer-list.component.scss']
})
export class DashboardOfferListComponent implements OnInit {


  offers: Offer[] = [];

  constructor(private offerService: OffersService) { }

  status!: Status[];

  ngOnInit(): void {
    /*this.offerService.getOffers().subscribe(data => {
    // bind to app-dashboard-offer-item
      this.offers = data;
    })*/
  }

}
