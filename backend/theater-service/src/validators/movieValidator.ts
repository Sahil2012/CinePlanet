import { Genre, Movie, Rating } from "@prisma/client";
import { z } from "zod";

export const movieValidator = (movie: Movie) =>
  z
    .object({
      name: z.string({ message: "'name' is required" }),
      rating: z.nativeEnum(Rating, {
        required_error: "'rating' is required",
      }),
      time: z.number({
        required_error: "'time' is required",
        invalid_type_error: "Invalid value for 'time'",
      }),
      genres: z
        .nativeEnum(Genre, { message: "Invalid value for 'genres'" })
        .array()
        .nonempty({ message: "'genres' cannot be empty" }),
      desciption: z
        .string({ message: "Invalid value for 'description'" })
        .optional(),
      starring: z
        .string({ message: "Invalid value for 'starring'" })
        .optional(),
    })
    .safeParse(movie);
