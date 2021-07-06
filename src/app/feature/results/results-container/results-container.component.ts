import {Component, OnInit } from '@angular/core';
import { Location } from "../../../shared/services/result/location.interface";
import { LocationService } from "../../../shared/services/result/location.service";
import { OffersService } from "../../../shared/services/offers/offers.service";
import {Offer} from "../../../shared/services/offers/offer.interface";


@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.scss']
})
export class ResultsContainerComponent implements OnInit {

  public items: Offer[] = [];

  constructor(private locationService: LocationService, private offersService: OffersService ) { }

  locations!: Location[];

  ngOnInit(): void {
    this.locationService.getLocations().subscribe(data => {
      this.locations = data;
    })
    this.offersService.getOffers().subscribe(data => {
      this.items = data;
    });
  }
}
