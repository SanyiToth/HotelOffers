import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "./order.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  static PATH = "/orders"

  constructor(private http: HttpClient) {}

  createHotel(orderData: Order): Observable<Order>{
    return this.http.post<Order>(environment.API_URL + OrdersService.PATH, orderData);
  }
}
