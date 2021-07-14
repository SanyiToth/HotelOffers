import {Component, OnInit} from '@angular/core';
import {Offer, Status} from "../../../../shared/services/offers/offer.interface";
import {DashboardOffersService} from "../dashboard-offers.service";
import {CurrentProviderService} from "../../current-provider.service";
import {OffersService} from "../../../../shared/services/offers/offers.service";
import {NotificationService} from "../../../../shared/services/notification/notification.service";


@Component({
  selector: 'app-dashboard-offers-container',
  templateUrl: './dashboard-offers-container.component.html',
  styleUrls: ['./dashboard-offers-container.component.scss']
})
export class DashboardOffersContainerComponent implements OnInit {


  allOffers!: Offer[];
  providerId = this.currentProviderService.getLoggedInProvider()._id;
  deletedOffer!: Offer;

  constructor(private dashboardOfferService: DashboardOffersService,
              private currentProviderService: CurrentProviderService,
              private offersService: OffersService,
              private notificationService: NotificationService
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

  getDeletedOffer($event: Offer) {
    this.deletedOffer = $event;
    this.allOffers = this.allOffers.filter(item => item._id !== $event._id)
    this.offersService.deleteOffer($event._id)
      .subscribe(() => {
        this.notificationService.open(`You deleted this offer "${$event.heading}"!`)
      }, error => {
        this.notificationService.open(error);
      })
  }
}
