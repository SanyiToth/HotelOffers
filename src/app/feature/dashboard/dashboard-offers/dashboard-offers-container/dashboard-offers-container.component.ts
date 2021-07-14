import {Component, OnInit} from '@angular/core';
import {Offer, Status} from "../../../../shared/services/offers/offer.interface";
import {DashboardOffersService} from "../dashboard-offers.service";
import {CurrentProviderService} from "../../current-provider.service";


@Component({
  selector: 'app-dashboard-offers-container',
  templateUrl: './dashboard-offers-container.component.html',
  styleUrls: ['./dashboard-offers-container.component.scss']
})
export class DashboardOffersContainerComponent implements OnInit {


  allOffers!: Offer[];
  providerId = this.currentProviderService.getLoggedInProvider()._id;

  constructor(private dashboardOfferService: DashboardOffersService,
              private currentProviderService: CurrentProviderService,
  ) {
  }


  ngOnInit() {
    this.dashboardOfferService.getOffersByProviderId(this.providerId, Status.All)
      .subscribe(data => {
        // bind to app-dashboard-offer-item template
        this.allOffers = data
      });
  }

  //getting status and filtering
  statusChanged(status: Status) {
    this.dashboardOfferService.getOffersByProviderId(this.providerId, status)
      .subscribe(data => {
      this.allOffers = data
    })
  }
}
