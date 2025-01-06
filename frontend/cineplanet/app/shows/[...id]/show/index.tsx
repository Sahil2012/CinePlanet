"use client";

import React, { useState } from "react";
import { Box, Flex } from "@radix-ui/themes";
import SeatArrangement from "./seat-arrangement";
import { Show as ShowType } from "@/_services/ShowService";
import { Seat, SeatStatus } from "@/_services/SeatService";
import { Movie } from "@/_services/MovieService";
import ShowDetails from "./show-details";

interface ShowProps {
  show: ShowType;
  seatArrangement: SeatStatus[][];
  movie: Movie;
}

const Show = ({ show, seatArrangement, movie }: ShowProps) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [seatLimitReached, setSeatLimitReached] = useState(false);

  const isSeatSelected = (rowIndex: number, columnIndex: number) => {
    if (
      selectedSeats.find(
        (seat) => seat.row === rowIndex && seat.column === columnIndex
      )
    )
      return true;
    else return false;
  };

  const handleSeatSelect = (
    rowIndex: number,
    columnIndex: number,
    rowName: string,
    seatNumber: number
  ) => {
    if (isSeatSelected(rowIndex, columnIndex)) {
      setSelectedSeats(
        selectedSeats.filter(
          (seat) => !(seat.row === rowIndex && seat.column === columnIndex)
        )
      );
    } else {
      if (selectedSeats.length === 6) {
        setSeatLimitReached(true);
        setTimeout(() => {
          setSeatLimitReached(false);
        }, 2000);
        return;
      }
      setSelectedSeats([
        ...selectedSeats,
        {
          row: rowIndex,
          column: columnIndex,
          label: `${rowName.toUpperCase()}${seatNumber}`,
        },
      ]);
    }
  };

  return (
    <Flex direction="column" className="h-[var(--main-area-height)]">
      <ShowDetails
        show={show}
        areSeatsSelected={selectedSeats.length > 0}
        movie={movie}
        selectedSeats={selectedSeats}
      />
      <Box className="flex-grow">
        <SeatArrangement
          seatArrangement={seatArrangement}
          seatLimitReached={seatLimitReached}
          isSeatSelected={isSeatSelected}
          onSelectSeat={handleSeatSelect}
        />
      </Box>
    </Flex>
  );
};

export default Show;
