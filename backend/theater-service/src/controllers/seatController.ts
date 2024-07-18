import { Request, Response } from "express";
import SeatService from "../services/seatService";

const seatService = new SeatService();

export const getAllSeats = async (req: Request, res: Response) => {
  // Extract query parameters
  const showId = req.query.showId as string;

  // guard condition
  if (!showId) {
    return res.status(400).json({ message: "Query parameter expected" });
  }

  // Parse query parameters
  let numericShowId: number;
  try {
    numericShowId = parseInt(showId);
  } catch {
    return res.status(400).json({ message: "Invalid show Id" });
  }

  // Execute query
  try {
    const seats = await seatService.getAllSeats(numericShowId);
    res.status(200).json(seats);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Some error occured while fetching Seats" });
  }
};
