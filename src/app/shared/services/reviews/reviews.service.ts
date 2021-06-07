import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  static PATH = "/reviews"

  constructor(private http: HttpClient) {
  }

  getReviews(hotelId: number): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + ReviewsService.PATH);
  }
}
