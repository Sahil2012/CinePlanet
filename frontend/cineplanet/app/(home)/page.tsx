import { Box, Flex } from "@radix-ui/themes";
import FilterControl from "./filter-control";
import MoviesContent from "./movies-content";
import "react-multi-carousel/lib/styles.css";
import GenreService from "@/_services/GenreService";
import TheatreService from "@/_services/TheatreService";

interface HomePageProps {
  searchParams: Promise<{
    genres?: string | string[];
    theatres?: string | string[];
  }>;
}

const HomePage = async ({ searchParams }: HomePageProps) => {
  const params = await searchParams;

  let genresQuery: undefined | string[];
  let theatresQuery: undefined | string[];
  if (params.genres) {
    if (typeof params.genres === "string") {
      genresQuery = [params.genres];
    } else {
      genresQuery = params.genres;
    }
  }
  if (params.theatres) {
    if (typeof params.theatres === "string") {
      theatresQuery = [params.theatres];
    } else {
      theatresQuery = params.theatres;
    }
  }

  const genres = await GenreService.getGenres();
  const theatres = await TheatreService.getTheatres();

  return (
    <Flex py="3" direction="column" gap="5" className="h-full">
      <FilterControl genres={genres} theatres={theatres} />
      <Box>
        <MoviesContent
          genres={genresQuery}
          theatres={theatresQuery}
        />
      </Box>
    </Flex>
  );
};

export default HomePage;
