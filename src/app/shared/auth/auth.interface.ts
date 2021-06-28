import {Hotel} from "../services/hotels/hotel.interface";

export interface LoginCredential {
  email: string;
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
