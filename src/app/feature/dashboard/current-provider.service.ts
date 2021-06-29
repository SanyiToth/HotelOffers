import {Injectable} from '@angular/core';
import {Hotel} from "../../shared/services/hotels/hotel.interface";

@Injectable({
  providedIn: 'root'
})
export class CurrentProviderService {
  loggedInProvider!: Hotel;

  constructor() {
  }

  getLoggedInProvider(): Hotel {
    return this.loggedInProvider = JSON.parse(<string>localStorage.getItem('loggedInProvider'));
  }
}
