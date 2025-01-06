import { Box, Button } from "@radix-ui/themes";
import React, { useState } from "react";
import BookTicketsDialog from "./book-tickets-dialog";
import { Show } from "@/_services/ShowService";
import { Movie } from "@/_services/MovieService";
import SeatService, { BlockStatus, Seat } from "@/_services/SeatService";
import { useQuery } from "@tanstack/react-query";

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
  const { data, isFetching, isPending, error, refetch } = useQuery<BlockStatus>({
    queryKey: ["blockSeats", show.id, show.theatreId, ...selectedSeats],
    queryFn: () =>
      SeatService.blockSeats(show.id, show.theatreId, selectedSeats),
    refetchOnWindowFocus: false,
    enabled: false,
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
        seatsStatus={data}
        isLoading={isFetching || isPending}
        error={error}
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
