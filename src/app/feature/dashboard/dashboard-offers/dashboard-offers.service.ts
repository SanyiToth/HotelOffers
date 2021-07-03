import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Offer } from "../../../shared/services/offers/offer.interface";
import {environment} from "../../../../environments/environment.prod";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardOffersService {

  static PATH = "/offers/findByProviderId";


  constructor(private http: HttpClient) { }

  getOffersByProviderId(providerId: string): Observable<Offer[]>{
    return this.http.get<Offer[]>(environment.API_URL + DashboardOffersService.PATH + '/' + providerId)
  }

}
