export interface Offer {
  hotelId?: number;
  id?: number;
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
