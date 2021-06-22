import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {OrdersService} from "../../services/orders/orders.service";

@Injectable({
  providedIn: 'root'
})
export class OrdersResolver implements Resolve<any[]> {


  constructor(private ordersService:OrdersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.ordersService.getOrders();
  }
}
