import { SeatStatus } from "@/_services/SeatService";
import { Box, Callout, Flex, Text } from "@radix-ui/themes";
import { MdError } from "react-icons/md";
import ArrangementGrid from "./ArrangementGrid";
import Legend from "./Legend";

interface SeatArrangementProps {
  seatArrangement: SeatStatus[][];
  seatLimitReached: boolean;
  onSelectSeat: (
    row: number,
    column: number,
    rowName: string,
    columnNumber: number
  ) => void;
  isSeatSelected: (row: number, column: number) => boolean;
}

const SeatArrangement = ({
  seatArrangement,
  seatLimitReached,
  onSelectSeat,
  isSeatSelected,
}: SeatArrangementProps) => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className="h-full relative"
    >
      <Box className="absolute right-0 top-4 w-auto">
        <Legend />
      </Box>
      <Flex className="flex-grow" justify="center" align="center">
        <ArrangementGrid
          seatArrangement={seatArrangement}
          isSeatSelected={isSeatSelected}
          onSelectSeat={onSelectSeat}
        />
      </Flex>
      <Flex
        direction="column"
        gap="1"
        align="center"
        className="relative bottom-4 pl-5"
      >
        <Text color="gray" className="text-[0.65rem]">
          SCREEN THIS WAY
        </Text>
        <Box className="h-1.5 rounded-sm w-80 bg-[var(--accent-8)] border border-[var(--accent-8)]"></Box>
      </Flex>
      {seatLimitReached && (
        <Box className="absolute top-5 w-full flex justify-center">
          <Callout.Root color="gray" variant="soft" highContrast>
            <Callout.Icon>
              <MdError />
            </Callout.Icon>
            <Callout.Text>Maximum 6 seats can be selected</Callout.Text>
          </Callout.Root>
        </Box>
      )}
    </Flex>
  );
};

export default SeatArrangement;
