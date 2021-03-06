import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Offer} from "../../services/offers/offer.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {OffersService} from "../../services/offers/offers.service";

@Injectable({
  providedIn: 'root'
})


export class OffersResolver implements Resolve<Offer[]> {

  constructor(private offersService: OffersService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Offer[]> {
    return this.offersService.getOffers();
  }
}
