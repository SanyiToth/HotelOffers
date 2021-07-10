export interface Order {
  customer: {
    name: string;
    email: string;
    phone: string;
  }
  payment: string;
  note: string;
  provider: string;
  product: string;
}
