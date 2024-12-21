import { getToday, isDateValid, removeHours } from "@/_lib/utils";
import MovieService from "@/_services/MovieService";
import { Box } from "@radix-ui/themes";
import { format } from "date-fns";
import { notFound, redirect } from "next/navigation";
import DateSelector from "./DateSelector";
import MovieDetails from "./MovieDetails";
import ShowList from "./show-list";

const getDateQuery = () => {
  const searchParams = new URLSearchParams();

  const formattedDate = format(getToday(), "yyyy-MM-dd");
  searchParams.set("date", formattedDate);

  return searchParams.toString();
};

interface MoviePageProps {
  params: Promise<{
    movieId: string;
  }>;
  searchParams: Promise<{
    date: string;
  }>;
}

const MoviePage = async ({ params, searchParams }: MoviePageProps) => {
  const { movieId } = await params;
  const { date } = await searchParams;

  const movie = await MovieService.getMovie(movieId);
  if (!movie) {
    return notFound();
  }

  const parsedDate = isDateValid(date)
    ? removeHours(Date.parse(date)).valueOf()
    : redirect(`/movies/${movieId}?${getDateQuery()}`);

  return (
    <Box className="h-fit">
      <MovieDetails movie={movie} />
      <Box className="px-16 py-5">
        <DateSelector date={parsedDate} movieId={movieId} />
        <ShowList movieId={movieId} date={parsedDate} />
      </Box>
    </Box>
  );
};

export default MoviePage;
