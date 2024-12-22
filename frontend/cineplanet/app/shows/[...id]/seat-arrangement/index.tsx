"use client";

import { SeatStatus } from "@/_services/SeatService";
import { Box, Callout, Grid, Text } from "@radix-ui/themes";
import { Fragment, useState } from "react";
import Seat from "./Seat";
import { BiError } from "react-icons/bi";
import { MdError } from "react-icons/md";

type Seat = [number, number];

interface SeatArrangementProps {
  seatArrangement: SeatStatus[][];
}

const SeatArrangement = ({ seatArrangement }: SeatArrangementProps) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [error, setError] = useState(false);

  const numberOfRows = seatArrangement.length;
  const numberOfColumns = seatArrangement[0].length;

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
    <>
      <Grid
        rows={`${numberOfRows}`}
        columns={`repeat(${numberOfColumns + 1}, minmax(0, auto))`}
        align="center"
        gap="3"
      >
        {seatArrangement.map((row, rowIndex) => {
          const rowName = String.fromCharCode(64 + (numberOfRows - rowIndex));
          let seatNumber = 0;

          // render row
          return (
            <Fragment key={"#" + rowIndex}>
              <Text color="gray" size="4" className="mr-8">
                {rowName}
              </Text>
              {row.map((seat, columnIndex) => {
                if (seat !== "NA") {
                  seatNumber += 1;
                }

                // render seat
                return (
                  <Seat
                    key={`${rowIndex}_${columnIndex}`}
                    seatNumber={seatNumber}
                    status={seat}
                    selected={isSeatSelected(rowIndex, columnIndex - 1)}
                    onSelectSeat={() => {
                      handleSeatSelect(rowIndex, columnIndex - 1);
                    }}
                  />
                );
              })}
            </Fragment>
          );
        })}
      </Grid>
      {error && (
        <Box className="absolute top-0 w-full flex justify-center">
          <Callout.Root color="gray" variant="soft" highContrast>
            <Callout.Icon>
              <MdError />
            </Callout.Icon>
            <Callout.Text>Maximum 6 seats can be selected</Callout.Text>
          </Callout.Root>
        </Box>
      )}
    </>
  );
};

export default SeatArrangement;
