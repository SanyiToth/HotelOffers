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

@Injectable({
  providedIn: 'root'
})


export class OffersResolver implements Resolve<Offer[]> {

  static PATH = '/offers'

  constructor(private http: HttpClient) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Offer[]> {
    return this.http.get<Offer[]>(environment.API_URL + OffersResolver.PATH);
  }
}
