import { Component, OnInit } from '@angular/core';
import { Offer } from "../../../../shared/services/offers/offer.interface";
import { OffersService } from "../../../../shared/services/offers/offers.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard-offers-container',
  templateUrl: './dashboard-offers-container.component.html',
  styleUrls: ['./dashboard-offers-container.component.scss']
})
export class DashboardOffersContainerComponent implements OnInit {

  offers!: Offer[]

  constructor(private offerService: OffersService, private router: ActivatedRoute) { }

  ngOnInit(): void {
   this.offerService.getOffers().subscribe(data => {
      this.offers = data;
      console.log("all offers:", data)
    })
  }

}
