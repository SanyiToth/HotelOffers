import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Hotel} from "../../services/hotels/hotel.interface";

@Injectable({
  providedIn: 'root'
})
export class HotelsResolver implements Resolve<Hotel[]> {

  static PATH = '/hotels'

  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(environment.API_URL + HotelsResolver.PATH);
  }
}
