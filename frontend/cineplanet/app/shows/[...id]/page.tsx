import SeatService from "@/_services/SeatService";
import ShowService from "@/_services/ShowService";
import { notFound } from "next/navigation";
import Show from "./show";
import MovieService from "@/_services/MovieService";

interface ShowPageProps {
  params: Promise<{
    id: string[];
  }>;
}

const ShowPage = async ({ params }: ShowPageProps) => {
  const [showId, theatreId] = (await params).id;
  if (!showId || !theatreId) {
    return notFound();
  }

  const seatArrangementPromise = SeatService.getSeatArrangement(
    showId,
    theatreId
  );
  const showPromise = ShowService.getShow(showId, theatreId);

  const [seatArrangement, show] = await Promise.all([
    seatArrangementPromise,
    showPromise,
  ]);

  if (!seatArrangement || !show) {
    return notFound();
  }

  const movie = await MovieService.getMovie(show.movieId);
  if (!movie) {
    return notFound();
  }
  
  return <Show show={show} movie={movie} seatArrangement={seatArrangement} />;
};

export default ShowPage;
