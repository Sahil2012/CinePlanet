"use client";

import { joinWithSlash } from "@/_lib/utils";
import { Movie } from "@/_services/MovieService";
import { Box, Card, Flex, Heading, Inset, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

const MovieCard = ({ movie, className }: MovieCardProps) => {
  const router = useRouter();

  if (!movie.name) {
    return null;
  }

  const languages = joinWithSlash(movie.languages, 2);
  const genres = joinWithSlash(movie.genres, 3);

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
    <Box
      className={"relative w-52 hover:cursor-pointer " + className}
      onClick={() => {
        router.push(`/movies/${movie.id}`);
      }}
    >
      <Card className="h-80 border-2 border-[var(--accent-8)] mb-3">
        <Inset clip="padding-box" side="all" p="current">
          {image}
        </Inset>
      </Card>
      <Flex direction="column" gap="1" className="px-2">
        <Heading as="h4" size="2" truncate>
          {movie.name}
        </Heading>
        <Flex gap="2" align="center">
          <Text
            className="bg-[var(--gray-11)] px-1 rounded-sm text-[var(--gray-2)] font-semibold"
            size="1"
          >
            {movie.rating}
          </Text>
          <Text size="1" color="gray">
            •
          </Text>
          <Text size="1" color="gray">
            {languages}
          </Text>
        </Flex>
        <Text size="1" color="gray">
          {genres}
        </Text>
      </Flex>
    </Box>
  );
};

export default MovieCard;