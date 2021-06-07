import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offer} from "./offer.interface";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  static PATH = "/offers"


  constructor(private http: HttpClient) {
  }

  getOffers(limit: number = 5): Observable<Offer[]> {
    return this.http.get<Offer[]>(environment.API_URL + OffersService.PATH + '?_limit=' + limit);
  }

  getOffer(id: number): Observable<Offer> {
    return this.http.get<Offer>(environment.API_URL + OffersService.PATH + '/' + id)
  }

}
