import { getDate, getTime } from "@/_lib/utils";
import { Booking as IBooking } from "@/_services/BookingService";
import MovieService from "@/_services/MovieService";
import { Flex, Separator, Spinner, Text } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";

interface BookingProps {
  booking: IBooking;
}

const Booking = ({ booking }: BookingProps) => {
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie"],
    queryFn: () => MovieService.getMovie(booking.show.movieId),
  });

  if (isLoading) {
    return (
      <Flex justify="center" align="center">
        <Spinner size="2" />
      </Flex>
    );
  }

  if (error || !movie) {
    return (
      <Flex justify="center" align="center">
        <Text>Could not get booking details. Please try again later</Text>
      </Flex>
    );
  }

  return (
    <Flex direction="column" gap="1">
      <Flex align="center" justify="between">
        <Text size="2" weight="medium">
          {movie.name}
        </Text>
        <Text
          size="1"
          className="italic opacity-70"
          color="gray"
          weight="light"
        >
          #{booking.id}
        </Text>
      </Flex>
      <Flex>
        <Text size="1" color="gray">
          {booking.show.theatreName}
        </Text>
        <Separator orientation="vertical" className="mx-1.5" />
        <Text size="1" color="gray">
          {getDate(booking.show.timestamp)}
        </Text>
        <Separator orientation="vertical" className="mx-1.5" />
        <Text size="1" color="gray">
          {getTime(booking.show.timestamp)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Booking;
