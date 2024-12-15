import { Box } from "@radix-ui/themes";
import ComingSoonMovies from "./ComingSoonMovies";
import NowShowingMovies from "./NowShowingMovies";
import MovieService from "@/_services/MovieService";

interface MoviesContentProps {
  genres?: string[];
  theatres?: string[];
}

const MoviesContent = async ({ genres, theatres }: MoviesContentProps) => {
  const comingSoonMoviesPromise = MovieService.getMovies({ genres, theatres });
  const nowShowingMoviesPromise = MovieService.getMovies({ genres, theatres });

  const [comingSoonMovies, nowShowingMovies] = await Promise.all([
    comingSoonMoviesPromise,
    nowShowingMoviesPromise,
  ]);

  return (
    <Box className="h-fit">
      <Box className="h-fit relative py-6">
        <Box className="absolute bg-[var(--gray-5)] h-full -translate-x-1/2 w-[calc(100vw-0.4rem)] left-1/2 -z-10 -top-0"></Box>
        <NowShowingMovies movies={nowShowingMovies} />
      </Box>
      <ComingSoonMovies movies={comingSoonMovies} />
    </Box>
  );
};

export default MoviesContent;
