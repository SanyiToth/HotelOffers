import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "./hotel.interface";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  static PATH = "/hotels"

  constructor(private http: HttpClient) {
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(environment.API_URL + HotelsService.PATH);
  }

  getHotel(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(environment.API_URL + HotelsService.PATH + '/' + id);
  }

}
