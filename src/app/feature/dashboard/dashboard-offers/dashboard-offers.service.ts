import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Offer, Status} from "../../../shared/services/offers/offer.interface";
import {environment} from "../../../../environments/environment.prod";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardOffersService {

  static PATH = "/offers/findByProviderId";

  constructor(private http: HttpClient) {}

  getOffersByProviderId(providerId: string, status: Status = Status.All): Observable<Offer[]> {
    if (status === Status.All) {
      console.log('if all:',status)
      return this.http.get<Offer[]>(environment.API_URL + DashboardOffersService.PATH + '/' + providerId)

    } else {
      console.log('params:', status)
      return this.http.get<Offer[]>(environment.API_URL + DashboardOffersService.PATH + '/' + providerId, {
        params: new HttpParams().set('status', status)
      })
    }
  };


}
