export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Ended = 'Ended',
  Deleted = 'Deleted',
  Draft = 'Draft',
}

export interface Offer {
  hotelId?: number;
  id?: number;
  status?: Status;
  _id?:string;
  heading: string;
  details: string;
  dateInterval: {
    startDate?: Date;
    endDate?: Date;
  }
  availableOffers?: number;
  price: number;
  description?: string;
  tags?: string;
  payment?: string;
  images: Image[];
  ratingInfo?: {
    rating: number;
    numberOfRatings: number
  }
  provider: string;
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
