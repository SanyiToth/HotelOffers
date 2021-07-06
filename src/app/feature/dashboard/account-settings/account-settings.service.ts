import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Hotel, NewHotel} from "../../../shared/services/hotels/hotel.interface";

@Injectable({
  providedIn: 'root'
})
export class AccountSettingsService {

  static PATH = "/profile";


  constructor(private http: HttpClient) { }

  getProfile(id: string): Observable<Hotel> {
    return this.http.get<Hotel>(environment.API_URL + AccountSettingsService.PATH + '/' + id);
  }

  patchProfile(id: string, hotel: NewHotel): Observable<Hotel> {
    return this.http.patch<Hotel>(environment.API_URL + AccountSettingsService.PATH + '/' + id, hotel);
  }

  deleteProfile(id: string): Observable<Hotel> {
    return this.http.delete<Hotel>(environment.API_URL + AccountSettingsService.PATH + '/' + id);
  }
}
