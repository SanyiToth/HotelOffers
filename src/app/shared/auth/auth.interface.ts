import {Hotel} from "../services/hotels/hotel.interface";

export interface LoginCredential {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  loggedInProvider: Hotel;
}

export interface User {
  name: string;
  email: string;
  id: string;
}
