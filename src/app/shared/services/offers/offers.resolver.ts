import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Offer} from "./offer.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class OffersResolver implements Resolve<Offer[]> {

  static PATH: '/offers'

  constructor(private http: HttpClient) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Offer[]> {
    return this.http.get<Offer[]>('http://localhost:3000/offers');
  }
}
