import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "./hotel.interface";

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  static API_URL = 'http://localhost:3000'
  static PATH = "/hotels"

  constructor(private http: HttpClient) {
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(HotelsService.API_URL + HotelsService.PATH);
  }

  getHotel(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(HotelsService.API_URL + HotelsService.PATH + '/' + id);
  }

}
