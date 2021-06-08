import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";
import {Review} from "./review.interface";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  static PATH = "/reviews"

  constructor(private http: HttpClient) {
  }

  getReviews(hotelId: number): Observable<Review[]> {
    return this.http.get<Review[]>(environment.API_URL + ReviewsService.PATH + '?hotelId=' + hotelId);
  }
}
