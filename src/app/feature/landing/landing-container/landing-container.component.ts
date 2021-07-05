import {Component, OnInit} from '@angular/core';
import {Offer} from "../../../shared/services/offers/offer.interface";
import {ActivatedRoute} from "@angular/router";
import {Statistics} from "../../../shared/services/statistics/statistics.interface";

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.css']
})


export class LandingContainerComponent implements OnInit {
  offers: Offer[];
  ourNumbers!: Statistics;


  constructor(private router: ActivatedRoute) {
    this.offers = this.router.snapshot.data.topOffers;
    this.ourNumbers = this.router.snapshot.data.stats;
  }


  ngOnInit(): void {
  }


}
