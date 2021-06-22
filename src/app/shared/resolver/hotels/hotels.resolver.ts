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
import {HotelsService} from "../../services/hotels/hotels.service";

@Injectable({
  providedIn: 'root'
})
export class HotelsResolver implements Resolve<Hotel[]> {


  constructor(private hotelsService: HotelsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hotel[]> {
    return this.hotelsService.getHotels();
  }
}
