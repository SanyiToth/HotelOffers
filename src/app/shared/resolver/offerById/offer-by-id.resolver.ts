import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Offer} from "../../services/offers/offer.interface";
import {OffersService} from "../../services/offers/offers.service";
import {switchMap, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OfferByIdResolver implements Resolve<Offer> {

  constructor(private offersService: OffersService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Offer> {
    return this.offersService.getOffer(route.params.id);
  }
}
