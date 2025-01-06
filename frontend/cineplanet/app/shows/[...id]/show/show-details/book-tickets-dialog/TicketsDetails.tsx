import Image from "@/_components/ui/Image";
import { getDate, getTime } from "@/_lib/utils";
import { Movie } from "@/_services/MovieService";
import { Seat } from "@/_services/SeatService";
import { Show } from "@/_services/ShowService";
import { Card, Flex, Heading, Inset, Text } from "@radix-ui/themes";
import React from "react";

interface TicketsDetailsProps {
  show: Show;
  movie: Movie;
  selectedSeats: Seat[];
}

const sortSeats = (seats: Seat[]) => {
  return seats
    .map((seat) => seat.label)
    .toSorted((a, b) => {
      const row1 = a[0];
      const row2 = b[0];

      if (row1 !== row2) {
        return row1.localeCompare(row2);
      } else {
        const num1 = parseInt(a.slice(1));
        const num2 = parseInt(b.slice(1));
        return num1 - num2;
      }
    });
};

const TicketsDetails = ({
  show,
  movie,
  selectedSeats,
}: TicketsDetailsProps) => {
  const sortedSelectedSeats = sortSeats(selectedSeats);

  return (
    <Flex justify="between" align="center">
      <Flex direction="column" gap="1" width="60%">
        <Heading size="5" weight="bold">
          {movie?.name}
        </Heading>
        <Heading size="3" color="gray">
          {show.theatreName}
        </Heading>
        <Text size="1" color="gray" weight="medium">
          {show.language}
        </Text>
        <Text size="1" color="gray" weight="medium">
          {getDate(show.timestamp)}, {getTime(show.timestamp)}
        </Text>
        <Flex gap="2" className="mt-1">
          {sortedSelectedSeats.map((seat) => (
            <Text
              key={seat}
              className="bg-[var(--gray-11)] px-1 rounded-sm text-[var(--gray-2)] font-semibold"
              size="1"
            >
              {seat}
            </Text>
          ))}
        </Flex>
      </Flex>
      <Card className="w-24 min-w-24 h-28 border-2 border-[var(--accent-8)]">
        <Inset clip="padding-box" side="all" p="current">
          <Image img={movie.img} alt={movie.name} />
        </Inset>
      </Card>
    </Flex>
  );
};

export default TicketsDetails;
