import { Component, OnInit, Input } from '@angular/core';
import {Offer, Status} from "../../../../shared/services/offers/offer.interface";
import { DashboardOffersService } from "../dashboard-offers.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import { CurrentProviderService } from "../../current-provider.service";

@Component({
  selector: 'app-dashboard-offers-container',
  templateUrl: './dashboard-offers-container.component.html',
  styleUrls: ['./dashboard-offers-container.component.scss']
})
export class DashboardOffersContainerComponent implements OnInit {


  allOffers!: Offer[];
  providerId = this.currentProviderService.getLoggedInProvider()._id;
  state!: Status

  constructor(private dashboardOfferService: DashboardOffersService,
              private currentProviderService: CurrentProviderService,
              private route: ActivatedRoute,
              private router: Router) {}


  ngOnInit() {
    this.dashboardOfferService.getOffersByProviderId(this.providerId, "all").subscribe(data => {
      // bind to app-dashboard-offer-item template
      this.allOffers = data
      console.log(this.providerId)
      console.log("all:", data)
    });
  }
  //getting status and filtering
  statusChanged(status: Status) {
    console.log("status from status change", status);
    this.route.params.subscribe(params => {
      this.state = params[status]
      })
    this.dashboardOfferService.getOffersByProviderId(this.providerId, this.state).subscribe(data => {
      this.allOffers = data
      console.log("filtered:", data)
    })
  }



}
