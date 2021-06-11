export interface Offer {
  hotelId: number;
  id: number;
  status?: string;
  heading: string;
  details: string;
  startDate?: Date;
  endDate?: Date;
  availableOffers?: number;
  price: number;
  description?: string;
  tags?: string;
  payment?: string;
  image: string;
  ratingInfo?: {
    rating: number;
    numberOfRatings: number
  }
}
