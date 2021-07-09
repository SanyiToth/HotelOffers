import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Location } from "./location.interface";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  static PATH = "/locations"

  constructor(private http: HttpClient) { }

  getLocations(): Observable<string[]> {
    return this.http.get<string[]>(environment.API_URL + LocationService.PATH)

  }
}
