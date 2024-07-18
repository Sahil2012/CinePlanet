import { Request, Response } from "express";
import showService from "../services/showService";
import { SeatsOnShows } from "@prisma/client";

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

export const updateSeatsStatus = async (req: Request, res: Response) => {
  // Extract query parameters
  const showId = req.params.showId;

  // Extract request objects
  const seats: SeatsOnShows[] = req.body;

  console.log(showId, seats, req.body);
  // Validations
  if (!Array.isArray(seats) || seats.length == 0) {
    return res.status(400).json({ message: "Invalid seats data" });
  }

  if (!seats.every((seat) => seat.status === seats[0].status)) {
    return res
      .status(400)
      .json({ message: "Status should be same for all the seats" });
  }

  let numericShowId: number;
  try {
    numericShowId = parseInt(showId);
  } catch {
    return res.status(400).json({ message: "Invalid show Id" });
  }

  // execute query
  try {
    const status = seats[0].status;
    const updatedSeats = showService.updateSeatsStatus(
      numericShowId,
      seats,
      status
    );
    return res.status(200).json(updatedSeats);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Some error occured while fetching shows" });
  }
};
