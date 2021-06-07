export interface Hotel {
  hotelId?: number;
  id: number;
  name: string;
  address: {
    country?: string;
    city: string;
    street: string;
    postCode: number;
  };
  classification: number;
  email: string;
  phone: string;
}
