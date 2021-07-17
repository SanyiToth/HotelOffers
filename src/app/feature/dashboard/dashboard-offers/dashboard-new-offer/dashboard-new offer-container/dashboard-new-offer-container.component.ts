import {Component} from '@angular/core';
import {NewOffer} from "../../../../../shared/services/offers/offer.interface";
import {OffersService} from "../../../../../shared/services/offers/offers.service";
import {NotificationService} from "../../../../../shared/services/notification/notification.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard-new-offer',
  templateUrl: './dashboard-new-offer-container.component.html',
  styleUrls: ['./dashboard-new-offer-container.component.scss']
})


export class DashboardNewOfferContainerComponent {

  offer!: NewOffer;

  constructor(private offerService: OffersService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  getNewOffer(offer: NewOffer) {
    this.offer = offer;
    console.log('offer', this.offer);
    this.offerService.createOffer(this.offer)
      .subscribe(response => {
        this.notificationService
          .open('Success! Your offer has been uploaded! We will redirect you to the offers page.');
        setTimeout(() => {
          this.router.navigate(['/dashboard/offers']);
        }, 1000)
      }, error => {
        this.notificationService.open(error);
      })

  }
}

