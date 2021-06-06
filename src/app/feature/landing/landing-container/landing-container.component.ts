import {Component, OnInit} from '@angular/core';
import {OffersService} from "../../../shared/services/offers/offers.service";
import {Offer} from "../../../shared/services/offers/offer.interface";
import {ErrorMessage} from "@angular/compiler-cli/ngcc/src/execution/cluster/api";
import {HotelsService} from "../../../shared/services/hotels/hotels.service";
import {Hotel} from "../../../shared/services/hotels/hotel.interface";
import {OrdersService} from "../../../shared/services/orders/orders.service";
import {Stats} from "../../../shared/services/our-numbers/ourNumbers.interface";

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.css']
})
export class LandingContainerComponent implements OnInit {

  hotels: Hotel[] = [];
  offers: Offer[] = [];
  orders: any[] = [];

  ourNumbers: Stats | undefined;

  errorMsg: ErrorMessage | undefined;

  constructor(private offersService: OffersService,
              private hotelsService: HotelsService,
              private ordersService: OrdersService) {


  }


  ngOnInit(): void {
    this.offersService.getOffers()
      .subscribe(offers => {

        this.offers = offers;
      }, error => {
        this.errorMsg = error
      })
    this.ordersService.getOrders()
      .subscribe(orders => {
        this.orders = orders;
      }, error => {
        this.errorMsg = error
      })
    this.hotelsService.getHotels()
      .subscribe(hotels => {
        this.hotels = hotels;
        this.ourNumbers = {
          Hotels: this.hotels.length,
          Orders: this.orders.length,
          Offers: this.offers.length
        }
      }, error => {
        this.errorMsg = error
      })
  }


}
