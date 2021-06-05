import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offer} from "./offer.interface";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  PATH = "/offers"

  constructor(private http: HttpClient) {
  }

  getOffers(limit: number = 5): Observable<Offer[]> {
    return this.http.get<Offer[]>(environment.API + this.PATH + '?_limit=' + limit);
  }

  getOffer(id: number): Observable<Offer> {
    return this.http.get<Offer>(environment.API + this.PATH + '/' + id)
  }

}
