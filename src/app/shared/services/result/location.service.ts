import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Location } from "./location.interface";
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  static PATH = "/locations"

  constructor(private http: HttpClient) { }

  getLocation(): Observable<Location[]> {
    return this.http.get<Location[]>(environment.API_URL + LocationService.PATH)

  }
}
