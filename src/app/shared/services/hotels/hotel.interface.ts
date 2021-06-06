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
  classification: string;
  email: string;
  phone: string;
  password: string;
}
