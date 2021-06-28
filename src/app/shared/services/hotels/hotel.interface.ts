export interface Hotel {
  hotelId?: number;
  id?: number;
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
