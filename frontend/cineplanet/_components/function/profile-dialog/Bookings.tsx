import {
  Box,
  Flex,
  Heading,
  Separator,
  Table,
  Text
} from "@radix-ui/themes";

const bookings = [
  {
    id: "jlk34dskje809",
    movie: "Yeh Jawani hai Deewani",
    theatre: "INOX, Grand Highstreet",
    date: "July 15",
    time: "3:00 PM",
  },
  {
    id: "787buhd787U",
    movie: "Deadpool & Wolverine",
    theatre: "PVR INOX, Pavillion marketcity, Aundh",
    date: "August 12",
    time: "9:00 PM",
  },
];

const Bookings = () => {
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
                <Flex direction="column" gap="1">
                  <Flex align="center" justify="between">
                    <Text size="2" weight="medium">
                      {booking.movie}
                    </Text>
                    <Text size="1" className="italic opacity-70" color="gray" weight="light">
                      #{booking.id}
                    </Text>
                  </Flex>
                  <Flex>
                    <Text size="1" color="gray">
                      {booking.theatre}
                    </Text>
                    <Separator orientation="vertical" className="mx-1.5" />
                    <Text size="1" color="gray">
                      {booking.date}
                    </Text>
                    <Separator orientation="vertical" className="mx-1.5" />
                    <Text size="1" color="gray">
                      {booking.time}
                    </Text>
                  </Flex>
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default Bookings;
