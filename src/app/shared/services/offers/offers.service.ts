import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offer} from "./offer.interface";
import {environment} from "../../../../environments/environment.prod";
import { Status } from "./offer-status";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  static PATH = "/orders";

  constructor(private http: HttpClient) {
  }

  getOffers(limit?: number): Observable<Offer[]> {
    if (limit) {
      return this.http.get<Offer[]>(environment.API_URL + OffersService.PATH + '?_limit=' + limit);
    } else {
      return this.http.get<Offer[]>(environment.API_URL + OffersService.PATH);
    }
  }

  getOffer(id: number | undefined): Observable<Offer> {
    return this.http.get<Offer>(environment.API_URL + OffersService.PATH + '/' + id)
  }

  createOffer(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(environment.API_URL + OffersService.PATH, offer);
  }


}
