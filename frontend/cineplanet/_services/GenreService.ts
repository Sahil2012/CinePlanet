export type Genre =
  | "Action"
  | "Adventure"
  | "Comedy"
  | "Drama"
  | "Fantasy"
  | "Horror"
  | "Mystery"
  | "Romance"
  | "Science Fiction"
  | "Thriller"
  | "Documentary"
  | "Animation"
  | "Crime"
  | "Family"
  | "Historical"
  | "War";

class GenreService {
  private readonly _genres: Genre[] = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Thriller",
    "Documentary",
    "Animation",
    "Crime",
    "Family",
    "Historical",
    "War",
  ];

  getGenres(): Promise<Genre[]> {
    const genres = new Promise<Genre[]>((res) => {
      setTimeout(() => {
        res(this._genres);
      }, 10);
    });
    return genres;
  }
}

export default new GenreService();
