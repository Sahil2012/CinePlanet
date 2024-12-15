"use client";

import Carousel from "@/_components/ui/Carousel";
import { Movie } from "@/_services/MovieService";
import { Box, Heading } from "@radix-ui/themes";
import MovieCard from "./MovieCard";

const ComingSoonMovies = ({ movies }: { movies: Movie[] }) => {
  if (!movies) {
    return null;
  }

  return (
    <Box>
      <Heading className="!text-4xl font-bold mt-10 mb-4">Coming soon</Heading>
      <Carousel>
        {movies.map((movie) => {
          return <MovieCard key={movie.name} movie={movie} />;
        })}
      </Carousel>
    </Box>
  );
};

export default ComingSoonMovies;
