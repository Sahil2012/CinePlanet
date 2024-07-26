import { Genre, Movie, Rating } from "@prisma/client";
import { z } from "zod";

export const movieValidator = (movie: Movie) =>
  z
    .object({
      name: z.string({ message: "Movie name is required" }),
      rating: z.nativeEnum(Rating, {
        required_error: "Movie rating is required",
      }),
      time: z.number({
        required_error: "Movie time is required",
        invalid_type_error: "Invalid movie time",
      }),
      genres: z
        .nativeEnum(Genre, { message: "Invalid Genre" })
        .array()
        .nonempty({ message: "Genres list cannot be empty" }),
      desciption: z.string({ message: "Invalid description" }).optional(),
      starring: z.string({ message: "Invalid starring attribute" }).optional(),
    })
    .safeParse(movie);
