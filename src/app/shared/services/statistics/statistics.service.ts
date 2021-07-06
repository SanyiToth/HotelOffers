import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Statistics} from "./statistics.interface";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  static PATH = "/statistics"

  constructor(private http: HttpClient) {
  }


  getStatistics(): Observable<Statistics> {
    return this.http.get<Statistics>(environment.API_URL + StatisticsService.PATH)
  }


}
