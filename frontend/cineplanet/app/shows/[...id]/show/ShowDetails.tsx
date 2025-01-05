import { Movie } from "@/_services/MovieService";
import { Show } from "@/_services/ShowService";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import BookTicketsDialog from "./book-tickets-dialog";
import { getDate, getTime } from "@/_lib/utils";
import { Seat } from "@/_services/SeatService";

interface ShowDetailsProps {
  show: Show;
  areSeatsSelected: boolean;
  movie: Movie;
  selectedSeats: Seat[];
}

const ShowDetails = ({
  show,
  areSeatsSelected,
  movie,
  selectedSeats,
}: ShowDetailsProps) => {
  return (
    <Box className="relative py-6">
      <Box className="absolute bg-[var(--gray-5)] h-full -translate-x-1/2 w-[calc(100vw-0.4rem)] left-1/2 -z-10 -top-0"></Box>
      <Flex justify="between" align="center">
        <Flex direction="column" gap="1" width="60%">
          <Heading size="6">{movie?.name}</Heading>
          <Heading size="5" color="gray" weight="medium">
            {show.theatreName}
          </Heading>
          <Flex gap="3">
            <Text size="3" color="gray">
              {show.language}
            </Text>
            <Text size="3" color="gray">
              &#x2022;
            </Text>
            <Text size="3" color="gray">
              {getDate(show.timestamp)}
            </Text>
            <Text size="3" color="gray">
              &#x2022;
            </Text>
            <Text size="3" color="gray">
              {getTime(show.timestamp)}
            </Text>
          </Flex>
        </Flex>
        <Box>
          <BookTicketsDialog
            show={show}
            movie={movie}
            selectedSeats={selectedSeats}
            trigger={
              <Button size="3" disabled={!areSeatsSelected}>
                Book Tickets
              </Button>
            }
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ShowDetails;
