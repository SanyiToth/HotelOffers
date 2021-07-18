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

  getOffers(city?: string): Observable<Offer[]> {
    if (city) {
      return this.http.get<Offer[]>(environment.API_URL + OffersService.PATH + '?city=' + city);
    } else {
      return this.http.get<Offer[]>(environment.API_URL + OffersService.PATH);
    }
  }


  getOffer(id: string | undefined): Observable<Offer> {
    return this.http.get<Offer>(environment.API_URL + OffersService.PATH + '/' + id)
  }

  createOffer(offer: NewOffer): Observable<Offer> {
    return this.http.post<Offer>(environment.API_URL + OffersService.PATH, offer);
  }

  deleteOffer(id: string | undefined): Observable<any> {
    return this.http.delete<any>(environment.API_URL + OffersService.PATH + '/' + id);
  }


  patchOffer(id: string | undefined, offer: NewOffer): Observable<Offer> {
    return this.http.patch<Offer>(environment.API_URL + OffersService.PATH + '/' + id, offer);
  }
}



