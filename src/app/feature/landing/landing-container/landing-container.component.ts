import {Component, OnInit} from '@angular/core';
import {OfferServiceService} from "../../../shared/offer-service/offer-service.service";
import {Offer} from "../../../shared/offer-service/offer.interface";
import {ErrorMessage} from "@angular/compiler-cli/ngcc/src/execution/cluster/api";

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.css']
})
export class LandingContainerComponent implements OnInit {

  offers: Offer[] = [];
  errorMsg: ErrorMessage | undefined;

  constructor(private offerService: OfferServiceService) {
  }


  ngOnInit(): void {
    this.offerService.getOffers()
      .subscribe(offers => {
        console.log('offers', offers)
        this.offers = offers;
      }, error => {
        this.errorMsg = error
      })
  }

}
