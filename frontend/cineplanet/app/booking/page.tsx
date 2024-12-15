"use client";
import SeatArrangement from "./SeatArrangement";
import { useState } from "react";

const seatLayout = [
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
];

const Booking = () => {
  const [seats, setSeats] = useState<string[][]>(seatLayout);

  const setSeat = (row: number, column: number, state: string) => {
    seatLayout[row][column] = state;
    setSeats(seatLayout);
  };

  return (
    <div className="flex justify-center p-4">
      <SeatArrangement
        seats={seats}
        rows={seatLayout.length}
        columns={seatLayout[0].length}
        setSeat={setSeat}
      />
    </div>
  );
};

export default Booking;
