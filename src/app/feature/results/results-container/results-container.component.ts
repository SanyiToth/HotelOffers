import {Component, OnInit} from '@angular/core';
import {LocationService} from "../../../shared/services/result/location.service";
import {OffersService} from "../../../shared/services/offers/offers.service";
import {Offer} from "../../../shared/services/offers/offer.interface";
import {switchMap, tap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {NotificationService} from "../../../shared/services/notification/notification.service";


@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.scss']
})
export class ResultsContainerComponent implements OnInit {

  public offers: Offer[] = [];
  city!: string;

  constructor(private route: ActivatedRoute,
              private locationService: LocationService,
              private offersService: OffersService,
              private notificationService:NotificationService) {
  }

  locations!: string[];

  ngOnInit(): void {
    this.locationService.getLocations()
      .subscribe(data => {
        this.locations = data;
      })

    this.route.queryParams
      .pipe(
        tap(query => {
            this.city = query.city;
          }
        ),
        switchMap(() => this.offersService.getOffers(this.city)))
      .subscribe(response => {
        this.offers = response;
      }, error => {
        this.notificationService.open(error)
      });
  }
}
