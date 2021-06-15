import {Component, OnInit} from '@angular/core';
import {Offer} from "../../../shared/services/offers/offer.interface";
import {Stats} from "../our-numbers/our-numbers.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.css']
})


export class LandingContainerComponent implements OnInit {
  offers: Offer[];
  ourNumbers: Stats;


  constructor(private router: ActivatedRoute) {
    this.offers = this.router.snapshot.data.topOffers;
    this.ourNumbers = {
      hotels: this.router.snapshot.data.hotels.length,
      orders: this.router.snapshot.data.orders.length,
      offers: this.router.snapshot.data.offers.length
    }
  }


  ngOnInit(): void {
  }


}
