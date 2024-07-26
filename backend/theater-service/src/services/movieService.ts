import { Movie, PrismaClient } from "@prisma/client";

class MovieService {
  private prisma = new PrismaClient();

  async addMovie(movie: Movie) {
    try {
      return await this.prisma.movie.create({
        data: movie,
      });
    } catch (err) {
      console.log(err);
      throw new Error("Some error occured while adding movie");
    }
  }

  async getMovieByMovieName(movieName: string) {
    try {
      return await this.prisma.movie.findMany({
        where: {
          name: movieName,
        },
      });
    } catch (err) {
      console.log(err);
      throw new Error("Some error occured while fetching movie");
    }
  }

  async deleteMovie(movieId: number) {
    try {
      return await this.prisma.movie.delete({
        where: {
          id: movieId,
        },
      });
    } catch (err) {
      console.log(err);
      throw new Error("Some error occured while deleting movie");
    }
  }
}

export default MovieService;
