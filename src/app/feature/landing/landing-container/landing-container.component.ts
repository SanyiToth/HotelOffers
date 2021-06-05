import {Component, OnInit} from '@angular/core';
import {OffersService} from "../../../shared/offers-service/offers.service";
import {Offer} from "../../../shared/offers-service/offer.interface";
import {ErrorMessage} from "@angular/compiler-cli/ngcc/src/execution/cluster/api";

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.css']
})
export class LandingContainerComponent implements OnInit {

  offers: Offer[] = [];
  errorMsg: ErrorMessage | undefined;

  constructor(private offersService: OffersService) {
  }


  ngOnInit(): void {
    this.offersService.getOffers()
      .subscribe(offers => {
        this.offers = offers;
      }, error => {
        this.errorMsg = error
      })

  }

}
