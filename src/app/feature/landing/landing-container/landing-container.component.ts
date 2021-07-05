import {Component, OnInit} from '@angular/core';
import {Offer} from "../../../shared/services/offers/offer.interface";
import {ActivatedRoute} from "@angular/router";
import {Statistics} from "../../../shared/services/statistics/statistics.interface";
import {LocationService} from "../../../shared/services/result/location.service";

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.css']
})


export class LandingContainerComponent implements OnInit {
  offers: Offer[];
  ourNumbers!: Statistics;
  locations!: string[];


  constructor(private router: ActivatedRoute, private locationService: LocationService) {
    this.locationService.getLocations()
      .subscribe(locations => {
      this.locations = locations;
    })
    this.offers = this.router.snapshot.data.topOffers;
    this.ourNumbers = this.router.snapshot.data.stats;
  }


  ngOnInit(): void {
  }


}
