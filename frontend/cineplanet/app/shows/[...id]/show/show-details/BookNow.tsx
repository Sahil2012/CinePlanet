import { Box, Button } from "@radix-ui/themes";
import React, { useState } from "react";
import BookTicketsDialog from "./book-tickets-dialog";
import { Show } from "@/_services/ShowService";
import { Movie } from "@/_services/MovieService";
import SeatService, { BlockStatus, Seat } from "@/_services/SeatService";
import { useQuery } from "@tanstack/react-query";
import PaymentService, { Bill as IBill } from "@/_services/PaymentService";

interface BookNowProps {
  show: Show;
  movie: Movie;
  areSeatsSelected: boolean;
  selectedSeats: Seat[];
}

const BookNow = ({
  show,
  movie,
  areSeatsSelected,
  selectedSeats,
}: BookNowProps) => {
  const {
    data: blockSeatsStatus,
    isFetching,
    isPending,
    error: blockSeatsError,
    refetch,
  } = useQuery<BlockStatus>({
    queryKey: ["blockSeats", show.id, show.theatreId, ...selectedSeats],
    queryFn: () =>
      SeatService.blockSeats(show.id, show.theatreId, selectedSeats),
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const {
    data: bill,
    isLoading,
    error: billError,
  } = useQuery<IBill>({
    queryKey: ["bill", show.id, ...selectedSeats],
    queryFn: () => PaymentService.generateBill(show.id, selectedSeats),
    refetchOnWindowFocus: false,
    enabled: blockSeatsStatus === "SUCCESS",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookNow = () => {
    refetch();
    setIsDialogOpen(true);
  };

  return (
    <Box>
      <Button size="3" disabled={!areSeatsSelected} onClick={handleBookNow}>
        Book Tickets
      </Button>
      <BookTicketsDialog
        seatsStatus={blockSeatsStatus}
        bill={bill}
        isLoading={isFetching || isPending || isLoading}
        error={blockSeatsError || billError}
        show={show}
        movie={movie}
        selectedSeats={selectedSeats}
        open={isDialogOpen}
        onOpenChange={() => {
          setIsDialogOpen(!isDialogOpen);
        }}
      />
    </Box>
  );
};

export default BookNow;
