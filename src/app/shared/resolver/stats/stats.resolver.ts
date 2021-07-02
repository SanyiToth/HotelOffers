import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Stat} from "../../services/stat/stat.interface";
import {StatsService} from "../../services/stat/stats.service";

@Injectable({
  providedIn: 'root'
})
export class StatsResolver implements Resolve<Stat> {

  constructor(private statsService: StatsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Stat> {
    return this.statsService.getStatistics();
  }
}
