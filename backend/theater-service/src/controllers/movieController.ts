import { Movie } from "@prisma/client";
import { Request, Response } from "express";
import { movieValidator } from "../validators/movieValidator";
import MovieService from "../services/movieService";

const movieService = new MovieService();

export const addMovie = async (req: Request, res: Response) => {
  // Extract request object
  const movie: Movie = req.body;

  // Validations
  const { success, error } = movieValidator(movie);
  if (!success) {
    console.log(error.issues[0]);
    return res.status(400).json({ message: error.issues[0].message });
  }

  // Execute query
  try {
    const addedMovie = await movieService.addMovie(movie);
    return res.status(200).json(addedMovie);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Some error occured while fetching shows" });
  }
};

export const getMovieByMovieName = async (req: Request, res: Response) => {
  // extract query parameters
  const movieName = req.query.movieName as string;

  // guard condition
  if (!movieName) {
    return res.status(400).json({ message: "Please provide movie name" });
  }

  // Execute query
  try {
    const movies = await movieService.getMovieByMovieName(movieName);

    if (movies.length === 0) {
      return res
        .status(404)
        .json({ message: "No movie found for the given movie name" });
    }
    res.status(200).json(movies);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Some error occured while fetching shows" });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  // Extract movie id
  const movieId = req.params.movieId;

  // validation
  let numericMovieId: number;
  try {
    numericMovieId = parseInt(movieId);
  } catch {
    return res.status(400).json({ message: "Invalid movie Id" });
  }

  // Execute query
  try {
    const deletedMovie = await movieService.deleteMovie(numericMovieId);
    return res.status(200).json(deletedMovie);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Some error occured while deleting movie" });
  }
};
