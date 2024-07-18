import { Request, Response } from "express";
import showService from "../services/showService";

export const getAllShows = async (req: Request, res: Response) => {
  // extract query parameters
  const movieName = req.query.movieName as string;

  // guard condition
  if (!movieName) {
    return res.status(400).json({ message: "Please provide movie Name" });
  }

  // Execute query
  try {
    const shows = await showService.getAllShows(movieName);

    if (shows.length === 0) {
      return res
        .status(404)
        .json({ message: "No shows found for the given movie" });
    }
    res.status(200).json(shows);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Some error occured while fetching shows" });
  }
};
