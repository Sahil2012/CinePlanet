import BookingService from "@/_services/BookingService";
import {
  Box,
  Flex,
  Heading,
  Spinner,
  Table,
  Text
} from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { User } from "next-auth";
import Booking from "./Booking";

interface BookingsProps {
  user: User;
}

const Bookings = ({ user }: BookingsProps) => {
  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["userBookings", user.email],
    queryFn: () => BookingService.getBookings(user.email),
  });

  if (isLoading) {
    return (
      <Flex justify="center" align="center">
        <Spinner size="2" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex justify="center" align="center">
        <Text color="gray">
          Could not fetch bookings. Please try again later
        </Text>
      </Flex>
    );
  }

  if (!bookings || bookings.length === 0) {
    return (
      <Flex justify="center" align="center">
        <Text color="gray">No bookings available to display.</Text>
      </Flex>
    );
  }

  return (
    <Box>
      <Heading align="center" size="4" mb="3">
        Your bookings
      </Heading>
      <Table.Root variant="surface">
        <Table.Body>
          {bookings.map((booking) => (
            <Table.Row key={booking.id}>
              <Table.Cell>
                <Booking booking={booking} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default Bookings;
