import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Stat} from "./stat.interface";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  static PATH = "/statistics"

  constructor(private http: HttpClient) {
  }


  getStatistics(): Observable<Stat> {
    return this.http.get<Stat>(environment.API_URL + StatsService.PATH)
  }


}
