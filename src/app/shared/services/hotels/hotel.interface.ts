import {Offer} from "../offers/offer.interface";

export interface Hotel {
  _id:string;
  name: string;
  address: {
    country?: string;
    city: string;
    streetName: string;
    streetNumber: number;
    postalCode: number;
  };
  classification: number;
  email: string;
  phone: string;
  username: string;
  password: string;
}

export interface NewHotel extends Omit<Hotel, '_id'> {}
