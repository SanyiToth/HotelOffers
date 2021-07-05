import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Offer } from "../../../shared/services/offers/offer.interface";
import {environment} from "../../../../environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class DashboardOffersService {

  static PATH = "/offers/findByProviderId";


  constructor(private http: HttpClient) { }

  getOffersByProviderId(providerId: string, status:string = 'all'): Observable<Offer[]>{
    return this.http.get<Offer[]>(environment.API_URL + DashboardOffersService.PATH + '/' + providerId + '?=' + status)
  }

}
