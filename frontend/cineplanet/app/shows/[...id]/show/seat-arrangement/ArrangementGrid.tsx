import { SeatStatus } from "@/_services/SeatService";
import { Grid, Text } from "@radix-ui/themes";
import { Fragment } from "react";
import Seat from "./Seat";

interface ArrangementGridProps {
  seatArrangement: SeatStatus[][];
  onSelectSeat: (row: number, column: number) => void;
  isSeatSelected: (row: number, column: number) => boolean;
}

const ArrangementGrid = ({
  seatArrangement,
  onSelectSeat,
  isSeatSelected,
}: ArrangementGridProps) => {
  const numberOfRows = seatArrangement.length;
  const numberOfColumns = seatArrangement[0].length;

  return (
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
                    onSelectSeat(rowIndex, columnIndex - 1);
                  }}
                />
              );
            })}
          </Fragment>
        );
      })}
    </Grid>
  );
};

export default ArrangementGrid;
