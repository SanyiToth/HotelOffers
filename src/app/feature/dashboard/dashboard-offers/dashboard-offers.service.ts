import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import { Offer } from "../../../shared/services/offers/offer.interface";
import {environment} from "../../../../environments/environment.prod";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DashboardOffersService {

  static PATH = "/offers/findByProviderId";


  constructor(private http: HttpClient) {}

  getOffersByProviderId(providerId: string, status: string): Observable<Offer[]>{
    return this.http.get<Offer[]>(environment.API_URL + DashboardOffersService.PATH + '/' + providerId, {
      params: new HttpParams().set('status', status.toString())
    })
    };


  }
