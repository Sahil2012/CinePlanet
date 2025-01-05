import { Box, Button, Dialog, Flex, Separator, Text } from "@radix-ui/themes";
import { ReactNode, useEffect, useState } from "react";
import Wallet from "./Wallet";
import { Movie } from "@/_services/MovieService";
import { Show } from "@/_services/ShowService";
import { Seat } from "@/_services/SeatService";
import Bill from "./Bill";
import TicketsDetails from "./TicketsDetails";

interface BookTicketsDialogProps {
  trigger: ReactNode;
  show: Show;
  movie: Movie;
  selectedSeats: Seat[];
}

const BookTicketsDialog = ({
  trigger,
  show,
  movie,
  selectedSeats,
}: BookTicketsDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title align="center" size="7">
          Book Tickets
        </Dialog.Title>

        <Flex direction="column">
          <Box className="pt-3">
            <Wallet />
          </Box>
          <Box className="pt-8 pb-5 pl-2">
            <TicketsDetails show={show} movie={movie} selectedSeats={selectedSeats} />
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
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default BookTicketsDialog;
