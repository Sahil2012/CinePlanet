import { joinWithSlash } from "@/_lib/utils";
import { Movie } from "@/_services/MovieService";
import { Box, Card, Flex, Heading, Inset, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails = ({ movie }: MovieDetailsProps) => {
  const genres = joinWithSlash(movie.genres, 5);
  const languages = joinWithSlash(movie.languages, 4);

  const image = movie.img ? (
    <Image
      src={movie.img}
      alt={movie.name}
      className="object-cover h-full"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  ) : (
    <Box>Y</Box>
  );

  return (
    <Box className="relative py-10">
      <Box className="absolute bg-[var(--gray-5)] h-full -translate-x-1/2 w-[calc(100vw-0.4rem)] left-1/2 -z-10 -top-0"></Box>
      <Flex align="center" gap="7" className="w-full">
        <Card className="w-64 min-w-64 h-96 border-2 border-[var(--accent-8)]">
          <Inset clip="padding-box" side="all" p="current">
            {image}
          </Inset>
        </Card>
        <Flex direction="column" gap="5" flexShrink="1">
          <Flex direction="column" gap="1">
          <Heading size="8">{movie.name}</Heading>
          <Text size="3" color="gray">
            {movie.description}
          </Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Flex gap="3" align="center">
              <Text size="3" color="gray">
                {languages}
              </Text>
              <Text size="3" color="gray">
                •
              </Text>
              <Text size="3" color="gray">
                {genres}
              </Text>
            </Flex>
            <Box>
              <Text
                className="bg-[var(--gray-11)] px-2 rounded-sm text-[var(--gray-2)] font-semibold"
                size="2"
              >
                {movie.rating}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MovieDetails;
