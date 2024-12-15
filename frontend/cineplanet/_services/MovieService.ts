import { Genre } from "./GenreService";

const data: Movie[] = [
  {
    id: "1",
    name: "Lorem ipsum odor amet",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Est molestie pretium inceptos in tristique sodales. Dignissim conubia aliquam iaculis mi phasellus; in senectus. Dignissim dolor molestie integer aptent sagittis.",
    genres: ["Romance", "Comedy"],
    showtimes: ["12:00", "3:30", "7:15"],
    languages: ["Hindi"],
    rating: "U/A 13+",
  },
  {
    id: "2",
    name: "Aliquam vel proin",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam efficitur torquent rhoncus fermentum himenaeos neque conubia purus quam. Ridiculus pretium ultricies tincidunt ac integer est? Per rutrum cursus risus ultrices varius, leo non id posuere.",
    genres: ["Action"],
    showtimes: ["12:00", "3:30", "7:15"],
    languages: ["Hindi", "English"],
    rating: "U",
    img: "https://image.tmdb.org/t/p/w370_and_h556_bestv2/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg",
  },
  {
    id: "3",
    name: "Metus tincidunt semper",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Id arcu ex erat nunc varius nisi. Cursus molestie tincidunt magnis primis maximus facilisis efficitur ultricies. Orci sodales vivamus proin potenti, morbi in condimentum phasellus.",
    genres: ["Horror", "Documentary"],
    showtimes: ["12:00", "3:30", "7:15"],
    languages: ["Hindi", "English"],
    rating: "U/A 16+",
  },
  {
    id: "4",
    name: "Orci nisi erat",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Donec justo integer tellus in taciti consequat. Fringilla vestibulum purus aenean sagittis congue quam congue.",
    genres: ["Action", "Science Fiction"],
    showtimes: ["12:00", "3:30", "7:15"],
    languages: ["Hindi"],
    rating: "A",
    img: "https://image.tmdb.org/t/p/w370_and_h556_bestv2/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg",
  },
  {
    id: "5",
    name: "Mauris lacus fusce",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Cras facilisi eleifend faucibus eu quis himenaeos ornare. Eu class ligula nibh sollicitudin rutrum quisque sem massa. Bibendum facilisi ultricies tincidunt class tellus praesent congue platea porttitor.",
    genres: ["Drama", "Romance"],
    showtimes: ["12:00", "3:30", "7:15"],
    languages: ["Hindi"],
    rating: "U/A 13+",
  },
];

export interface Movie {
  id: string;
  name: string;
  description: string;
  rating: "U" | "U/A 13+" | "U/A 16+" | "A";
  genres: Genre[];
  img?: string;
  languages?: string[];
  showtimes: string[];
}

interface GetMoviesOptions {
  genres?: string[];
  theatres?: string[];
}

class MovieService {  
  getMovies(options?: GetMoviesOptions): Promise<Movie[]> {
    const movies = new Promise<Movie[]>((res) => {
      setTimeout(() => {
        if (options?.genres) {
          const filteredMovies = data.filter((m) =>
            m.genres.some((genre) => options.genres?.includes(genre))
          );
          res(filteredMovies);
        }
        res(data);
      }, 10);
    });
    return movies;
  }

  getMovie(movieId: string): Promise<Movie | undefined> {
    const movie = new Promise<Movie | undefined>((res) => {
      setTimeout(() => {
        const movie = data.find((m) => m.id === movieId);
        res(movie);
      }, 10);
    });
    return movie;
  }
}

export default new MovieService();
