import { Seat } from "./SeatService";
import { Show } from "./ShowService";

const data: Booking[] = [
  {
    id: "983hHJ98dfJdsf",
    show: {
      id: "1",
      theatreId: "1",
      movieId: "1",
      timestamp: 1713702000000,
      theatreName: "Grand Cinema Hall",
      language: "English",
    },
    seats: [{ column: 1, row: 1, label: "A1" }],
  },
  {
    id: "jlk34dskje809",
    show: {
      id: "11",
      theatreId: "1",
      movieId: "1",
      timestamp: 1713702000000,
      theatreName: "Grand Cinema Hall",
      language: "English",
    },
    seats: [
      { column: 1, row: 1, label: "A1" },
      { column: 2, row: 1, label: "B1" },
    ],
  },
];

export interface Booking {
  id: string;
  show: Show;
  seats: Seat[];
}

class BookingService {
  getBookings(userEmail?: string | null): Promise<Booking[] | null> {
    if (!userEmail) {
      return Promise.resolve(null);
    }

    return new Promise<Booking[]>((res) => {
      setTimeout(() => {
        res(data);
      }, 1000);
    });
  }
}

export default new BookingService();
