import MovieService from "@/_services/MovieService";
import { Box } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import MovieDetails from "./MovieDetails";

interface MoviePageProps {
  params: Promise<{
    movieId: string;
  }>;
}

const MoviePage = async ({ params }: MoviePageProps) => {
  const { movieId } = await params;
  const movie = await MovieService.getMovie(movieId);

  if (!movie) {
    return notFound();
  }

  return (
    <Box className="h-fit">
      <MovieDetails movie={movie} />
    </Box>
  );
};

export default MoviePage;
