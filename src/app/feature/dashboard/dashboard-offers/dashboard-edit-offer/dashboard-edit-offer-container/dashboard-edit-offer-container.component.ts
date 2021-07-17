import {Component, OnInit} from '@angular/core';
import {OffersService} from "../../../../../shared/services/offers/offers.service";
import {Offer} from "../../../../../shared/services/offers/offer.interface";
import {switchMap, tap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {NotificationService} from "../../../../../shared/services/notification/notification.service";

@Component({
  selector: 'app-dashboard-edit-offer-container',
  templateUrl: './dashboard-edit-offer-container.component.html',
  styleUrls: ['./dashboard-edit-offer-container.component.css']
})
export class DashboardEditOfferContainerComponent implements OnInit {

  offer!: Offer;
  id!: string;

  constructor(private offersService: OffersService,
              private route: ActivatedRoute,
              private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        tap(params => {
            this.id = params.id;
          }
        ),
        switchMap(() => this.offersService.getOffer(this.id)))
      .subscribe(response => {
        this.offer = response;
      }, error => {
        this.notificationService.open(error);
      });
  }

}
