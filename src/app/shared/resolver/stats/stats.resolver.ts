import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Statistics} from "../../services/statistics/statistics.interface";
import {StatisticsService} from "../../services/statistics/statistics.service";

@Injectable({
  providedIn: 'root'
})
export class StatsResolver implements Resolve<Statistics> {

  constructor(private statsService: StatisticsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Statistics> {
    return this.statsService.getStatistics();
  }
}
