import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Offer} from "../../services/offers/offer.interface";
import {OffersService} from "../../services/offers/offers.service";

@Injectable({
  providedIn: 'root'
})
export class TopOffersResolver implements Resolve<Offer[]> {

  constructor(private offersService: OffersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Offer[]> {
    return this.offersService.getOffers(5);
  }

}
