import { Seat } from "./SeatService";

export interface Bill {
  price: number;
  quantity: number;
  convenienceFee: number;
  total: number;
}

class PaymentService {
  generateBill(showId: string, seats: Seat[]) {
    return new Promise<Bill>((res) => {
      setTimeout(() => {
        res({
          price: 100,
          quantity: seats.length,
          convenienceFee: 20,
          total: 100 * seats.length + 20,
        });
      }, 1000);
    });
  }
}

export default new PaymentService();
