import { Component, OnInit } from '@angular/core';
import {Offer, Status} from "../../../../shared/services/offers/offer.interface";
import { DashboardOffersService } from "../dashboard-offers.service";
import {ActivatedRoute, Router} from "@angular/router";
import { CurrentProviderService } from "../../current-provider.service";

@Component({
  selector: 'app-dashboard-offers-container',
  templateUrl: './dashboard-offers-container.component.html',
  styleUrls: ['./dashboard-offers-container.component.scss']
})
export class DashboardOffersContainerComponent implements OnInit {

  allOffers!: Offer[]
  providerId = this.currentProviderService.getLoggedInProvider()._id;

  constructor(private dashboardOfferService: DashboardOffersService,
              private currentProviderService: CurrentProviderService,
              private route: ActivatedRoute,
              private router: Router) {}


  ngOnInit() {
    this.dashboardOfferService.getOffersByProviderId(this.providerId).subscribe(data => {
      // bind to app-dashboard-offer-item template
      this.allOffers = data
      console.log(this.providerId)
      console.log(data)
    })
   /* this.route.params.subscribe(params => {
      this.id = params['id'];
      this.dashboardOfferService.getOffersByProviderId(this.id).subscribe(data =>{
        this.allOffers = data;
        console.log("param", data)
      })
    })*/
  }

  statusChanged(status: Status) {
    console.log("status", status);
   // this.dashboardOfferService.getOffersById(providerId, status)
  }

}
