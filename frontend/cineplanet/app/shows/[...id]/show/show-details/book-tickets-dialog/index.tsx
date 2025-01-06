import { Movie } from "@/_services/MovieService";
import { BlockStatus, Seat } from "@/_services/SeatService";
import { Show } from "@/_services/ShowService";
import {
  Box,
  Button,
  Dialog,
  Flex,
  Separator,
  Spinner,
  Text,
  VisuallyHidden,
} from "@radix-ui/themes";
import { ReactNode } from "react";
import Bill from "./Bill";
import TicketsDetails from "./TicketsDetails";
import Wallet from "./Wallet";

interface BookTicketsDialogProps {
  open: boolean;
  onOpenChange: () => void;
  seatsStatus: BlockStatus | undefined;
  isLoading: boolean;
  error: Error | null;
  show: Show;
  movie: Movie;
  selectedSeats: Seat[];
}

const BookTicketsDialog = ({
  show,
  movie,
  selectedSeats,
  seatsStatus,
  isLoading,
  error,
  open,
  onOpenChange,
}: BookTicketsDialogProps) => {
  let content: ReactNode;

  if (isLoading) {
    content = (
      <>
        <VisuallyHidden>
          <Dialog.Title>Loading Booking Dialog</Dialog.Title>
        </VisuallyHidden>
        <Flex width="100%" justify="center" align="center">
          <Spinner size="3" loading={isLoading} />
        </Flex>
      </>
    );
  } else if (error) {
    content = (
      <>
        <VisuallyHidden>
          <Dialog.Title>Error Booking Dialog</Dialog.Title>
        </VisuallyHidden>
        <Text color="gray" size="3" align="center">
          Some error occured while trying to book tickets. Please try again
          later.
        </Text>
        <Flex justify="end" mt="3">
          <Dialog.Close>
            <Button>Okay</Button>
          </Dialog.Close>
        </Flex>
      </>
    );
  } else if (seatsStatus === "ALREADY_BOOKED") {
    content = (
      <>
        <VisuallyHidden>
          <Dialog.Title>Seats already booked</Dialog.Title>
        </VisuallyHidden>
        <Text color="gray" size="3">
          While you were choosing the seats, some or all of the selected seats
          already got booked. Please choose different seats.
        </Text>
        <Flex justify="end" mt="3">
          <Dialog.Close>
            <Button>Okay</Button>
          </Dialog.Close>
        </Flex>
      </>
    );
  } else if (seatsStatus === "SUCCESS") {
    content = (
      <>
        <Dialog.Title align="center" size="7">
          Book Tickets
        </Dialog.Title>

        <Flex direction="column">
          <Box className="pt-3">
            <Wallet />
          </Box>
          <Box className="pt-8 pb-5 pl-2">
            <TicketsDetails
              show={show}
              movie={movie}
              selectedSeats={selectedSeats}
            />
          </Box>
          <Flex justify="center">
            <Separator size="3" />
          </Flex>
          <Box className="py-5">
            <Bill show={show} selectedSeats={selectedSeats} />
          </Box>
          <Box>
            <Button onClick={() => {}} className="!w-full" size="3">
              Pay now
            </Button>
          </Box>
        </Flex>
      </>
    );
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Content maxWidth="450px">{content}</Dialog.Content>
    </Dialog.Root>
  );
};

export default BookTicketsDialog;
