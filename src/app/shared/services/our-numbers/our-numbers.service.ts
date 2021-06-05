import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Stats } from "./ourNumbers.interface";

@Injectable({
  providedIn: 'root'
})
export class OurNumbersService {

  static API_URL = `http://localhost:3000/stats`;

  constructor(private http: HttpClient) { }

  getStats(): Observable<Stats[]> {
    return this.http.get<Stats[]>(OurNumbersService.API_URL);
  }
}
