import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel, NewHotel} from "./hotel.interface";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  static PATH = "/providers"

  constructor(private http: HttpClient) {}

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(environment.API_URL + HotelsService.PATH);
  }

  getHotel(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(environment.API_URL + HotelsService.PATH + '/' + id);
  }

  createHotel(hotelData: NewHotel): Observable<Hotel>{
    return this.http.post<Hotel>(environment.API_URL + HotelsService.PATH, hotelData);
  }
}
