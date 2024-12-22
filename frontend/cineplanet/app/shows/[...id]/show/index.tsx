"use client";

import React, { useState } from "react";
import { Box, Flex } from "@radix-ui/themes";
import ShowDetails from "./ShowDetails";
import SeatArrangement from "./seat-arrangement";
import { Show as ShowType } from "@/_services/ShowService";
import { SeatStatus } from "@/_services/SeatService";
import { Movie } from "@/_services/MovieService";

type Seat = [number, number];

interface ShowProps {
  show: ShowType;
  seatArrangement: SeatStatus[][];
  movie: Movie;
}

const Show = ({ show, seatArrangement, movie }: ShowProps) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [error, setError] = useState(false);

  const isSeatSelected = (rowIndex: number, columnIndex: number) => {
    if (
      selectedSeats.find(
        (seat) => seat[0] === rowIndex && seat[1] === columnIndex
      )
    )
      return true;
    else return false;
  };

  const handleSeatSelect = (rowIndex: number, columnIndex: number) => {
    if (isSeatSelected(rowIndex, columnIndex)) {
      setSelectedSeats(
        selectedSeats.filter(
          (seat) => !(seat[0] === rowIndex && seat[1] === columnIndex)
        )
      );
    } else {
      if (selectedSeats.length === 6) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
        return;
      }
      setSelectedSeats([...selectedSeats, [rowIndex, columnIndex]]);
    }
  };

  return (
    <Flex direction="column" className="h-[var(--main-area-height)]">
      <ShowDetails
        show={show}
        areSeatsSelected={selectedSeats.length > 0}
        movie={movie}
      />
      <Box className="flex-grow">
        <SeatArrangement
          seatArrangement={seatArrangement}
          error={error}
          isSeatSelected={isSeatSelected}
          onSelectSeat={handleSeatSelect}
        />
      </Box>
    </Flex>
  );
};

export default Show;
