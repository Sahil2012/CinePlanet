import { SeatStatus } from "@/_services/SeatService";
import { Box, Flex, Text } from "@radix-ui/themes";

interface SeatProps {
  status: SeatStatus;
  seatNumber: number;
  selected: boolean;
  onSelectSeat: (seatNumber: number) => void;
}

const Seat = ({ status, seatNumber, selected, onSelectSeat }: SeatProps) => {
  if (status === "NA") {
    return <Box className="h-7 w-7"></Box>;
  }

  const boxClasses = "h-7 w-7 rounded-md";

  if (status === "BLOCKED") {
    return (
      <Flex
        justify="center"
        align="center"
        className={`${boxClasses} bg-[var(--gray-4)] cursor-not-allowed`}
      >
        <Text size="2" className="text-[var(--gray-8)]">
          {seatNumber}
        </Text>
      </Flex>
    );
  }

  const seatClasses = selected
    ? "bg-[var(--accent-12)] text-[var(--gray-3)]"
    : "border border-[var(--gray-11)] hover:bg-[var(--gray-11)] hover:text-[var(--gray-3)]";

  return (
    <Flex
      justify="center"
      align="center"
      className={`${boxClasses} cursor-pointer ${seatClasses}`}
      onClick={() => {
        onSelectSeat(seatNumber);
      }}
    >
      <Text size="2">{seatNumber}</Text>
    </Flex>
  );
};

export default Seat;
