export interface Offer {
  hotelId?: number;
  id?: number;
  _id?:string;
  status?: string;
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
  provider: any;
}

export interface Image {
  link: string;
  height: number;
  width: number;
  type: string;
  size: number;
  imgId: string;
}
