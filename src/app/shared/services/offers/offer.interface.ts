import {Hotel} from "../hotels/hotel.interface";

export enum Status {
  All = 'All',
  Active = 'Active',
  Inactive = 'Inactive',
  Ended = 'Ended',
  Deleted = 'Deleted',
  Draft = 'Draft'
}

export interface Offer {
  status: Status;
  _id?:string;
  heading: string;
  details: string;
  dateInterval: {
    startDate: Date;
    endDate: Date;
  }
  availableOffers: number;
  price: number;
  description: string;
  tags?: string;
  images: Image[];
  ratingInfo?: {
    rating: number;
    numberOfRatings: number
  }
  provider: Hotel
}

export interface NewOffer extends Omit<Offer, 'provider'> {
  provider: string
}

export interface Image {
  link: string;
  height: number;
  width: number;
  type: string;
  size: number;
  imgId: string;
  deletehash: string;
}
