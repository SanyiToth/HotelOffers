import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offer} from "./offer.interface";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private static API: "http://localhost:3000"
  private static PATH = "/offers"


  constructor(private http: HttpClient) {
  }

  getOffers(limit: number = 5): Observable<Offer[]> {
    return this.http.get<Offer[]>(OffersService.API + OffersService.PATH + '?_limit=' + limit);
  }

  getOffer(id: number): Observable<Offer> {
    return this.http.get<Offer>(OffersService.API + OffersService.PATH + '/' + id)
  }

}
