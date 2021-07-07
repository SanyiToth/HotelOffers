import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Offer } from "../../../shared/services/offers/offer.interface";
import { environment } from "../../../../environments/environment.prod";
import { HttpClient,HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardOffersService {

  static PATH = "/offers/findByProviderId";


  constructor(private http: HttpClient) {}

  getOffersByProviderId(providerId: string, status?: string): Observable<Offer[]> {
    console.log("status from service", status)
    if (status == null) {
      return this.http.get<Offer[]>(environment.API_URL + DashboardOffersService.PATH + '/' + providerId, )
    } else {
      return this.http.get<Offer[]>(environment.API_URL + DashboardOffersService.PATH + '/' + providerId, {
        params: new HttpParams().set('status', status)
      })
    }
  };


}
