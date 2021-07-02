import {Injectable} from '@angular/core';
import {Hotel} from "../../shared/services/hotels/hotel.interface";

@Injectable({
  providedIn: 'root'
})
export class CurrentProviderService {

  getLoggedInProvider(): Hotel {
    return <Hotel>JSON.parse(<string>localStorage.getItem('loggedInProvider'));
  }
}
