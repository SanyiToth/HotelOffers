import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  static API_URL = 'http://localhost:3000'
  static PATH = "/orders"

  constructor(private http: HttpClient) {
  }

  getOrders(limit: number = 5): Observable<any[]> {
    return this.http.get<any[]>(OrdersService.API_URL + OrdersService.PATH);
  }

  getOrder(id: number): Observable<any> {
    return this.http.get<any>(OrdersService.API_URL + OrdersService.PATH + '/' + id)
  }
}
