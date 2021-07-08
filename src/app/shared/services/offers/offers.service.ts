import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewOffer, Offer} from "./offer.interface";
import {environment} from "../../../../environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class OffersService {

  static PATH = "/offers";

  constructor(private http: HttpClient) {
  }

  getOffers(limit?: number): Observable<Offer[]> {
    if (limit) {
      return this.http.get<Offer[]>(environment.API_URL + OffersService.PATH + '?_limit=' + limit);
    } else {
      return this.http.get<Offer[]>(environment.API_URL + OffersService.PATH);
    }
  }

  getOffersByCity(city: string): Observable<Offer[]> {
    return this.http.get<Offer[]>(environment.API_URL + OffersService.PATH + '?city=' + city);
  }

  getOffer(id: number | undefined): Observable<Offer> {
    return this.http.get<Offer>(environment.API_URL + OffersService.PATH + '/' + id)
  }

  createOffer(offer: NewOffer): Observable<Offer> {
    return this.http.post<Offer>(environment.API_URL + OffersService.PATH, offer);
  }


}
