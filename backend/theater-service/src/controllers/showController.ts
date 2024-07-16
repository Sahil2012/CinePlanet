import { Request, Response } from "express";
import showService from "../services/showService";

const getAllShows = async (req: Request, res: Response) => {
  const { movieName } = req.params;

  try {
    
    const shows = await showService.getAllShows(movieName);

    if (shows.length === 0) {
      return res
        .status(404)
        .json({ message: "No shows found for the given movie name" });
    }

    res.status(200).json(shows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching shows" });
  }
};

export default {
  getAllShows,
};
