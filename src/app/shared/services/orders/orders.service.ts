import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  static PATH = "/orders"

  constructor(private http: HttpClient) {
  }

  getOrders(limit: number = 5): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + OrdersService.PATH);
  }

  getOrder(id: number): Observable<any> {
    return this.http.get<any>(environment.API_URL + OrdersService.PATH + '/' + id)
  }
}
