import {Component, OnInit} from '@angular/core';
import {Offer} from "../../../shared/services/offers/offer.interface";
import {Hotel} from "../../../shared/services/hotels/hotel.interface";
import {Stats} from "../our-numbers/ourNumbers.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.css']
})
export class LandingContainerComponent implements OnInit {

  hotels: Hotel[];
  offers: Offer[];
  orders: any[] = [];
  ourNumbers: Stats;


  constructor(private router: ActivatedRoute) {
    this.offers = this.router.snapshot.data.offers;
    this.hotels = this.router.snapshot.data.hotels;

    this.ourNumbers = {
      Hotels: this.hotels.length,
      Orders: 0,
      Offers: this.offers.length
    }
  }


  ngOnInit(): void {

    console.log("hotels", this.router.snapshot.data.hotels);

  }


}
