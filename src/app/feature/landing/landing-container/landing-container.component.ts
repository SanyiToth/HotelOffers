import {Component, OnInit} from '@angular/core';
import {OffersService} from "../../../shared/services/offers/offers.service";
import {Offer} from "../../../shared/services/offers/offer.interface";
import {ErrorMessage} from "@angular/compiler-cli/ngcc/src/execution/cluster/api";
import {HotelsService} from "../../../shared/services/hotels/hotels.service";
import {Hotel} from "../../../shared/services/hotels/hotel.interface";
import {OrdersService} from "../../../shared/services/orders/orders.service";
import {Stats} from "../our-numbers/ourNumbers.interface";
import {ActivatedRoute} from "@angular/router";

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

  constructor(private hotelsService: HotelsService,
              private ordersService: OrdersService, private router: ActivatedRoute) {


  }


  ngOnInit(): void {
    this.offers = this.router.snapshot.data.offers;
    console.log(this.offers)
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
