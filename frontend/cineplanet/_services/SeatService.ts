const data: SeatStatus[][] = [
  [
    "AVAILABLE",
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
  ],
  [
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
  ],
  [
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "AVAILABLE",
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
  ],
  [
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
  ],
  [
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
  ],
  [
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
  ],
  [
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
  ],
  [
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "NA",
    "AVAILABLE",
    "AVAILABLE",
    "NA",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
  ],
  [
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "NA",
    "AVAILABLE",
    "AVAILABLE",
    "NA",
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
  ],
  [
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "NA",
    "AVAILABLE",
    "AVAILABLE",
    "NA",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
  ],
];

export type SeatStatus = "AVAILABLE" | "BLOCKED" | "NA";
export type BlockStatus = "SUCCESS" | "ALREADY_BOOKED";

export interface Seat {
  row: number;
  column: number;
  label: string;
};

class SeatService {
  getSeatArrangement(showId: string, theatreId: string) {
    return new Promise<SeatStatus[][]>((res) => {
      setTimeout(() => {
        res(data);
      }, 10);
    });
  }

  blockSeats(showId: string, theatreId: string, seats: Seat[]) {
    return new Promise<BlockStatus>((res, rej) => {
      setTimeout(() => {
        const val = Math.random();
        if (val < 0.2) {
          res("ALREADY_BOOKED");
        } else {
          res("SUCCESS");
        }
      }, 1000);
    });
  }
}

export default new SeatService();
