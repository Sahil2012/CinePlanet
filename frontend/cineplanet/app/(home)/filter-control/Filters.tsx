import Dropdown from "@/_components/ui/Dropdown";
import { Genre } from "@/_services/GenreService";
import { Theatre } from "@/_services/TheatreService";
import { Flex } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

interface FiltersProps {
  genres: Genre[];
  theatres: Theatre[];
  selectedGenres: string[];
  selectedTheatres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedTheatres: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filters = ({
  genres,
  theatres,
  selectedGenres,
  selectedTheatres,
  setSelectedGenres,
  setSelectedTheatres,
}: FiltersProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Add params to state
  useEffect(() => {
    const genresParams = searchParams.getAll("genres");
    const theatresParams = searchParams.getAll("theatres");

    if (genresParams) {
      setSelectedGenres([
        ...genresParams.filter((param) =>
          genres.find((genre) => genre === param)
        ),
      ]);
    }

    if (theatresParams) {
      setSelectedTheatres([
        ...theatresParams.filter((param) =>
          theatres.find((theatre) => theatre.name === param)
        ),
      ]);
    }
  }, []);

  // change params on state change
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedGenres.length > 0) {
      selectedGenres.forEach((genre) => params.append("genres", genre));
    } else {
      params.delete("genres");
    }

    if (selectedTheatres.length > 0) {
      selectedTheatres.forEach((theatre) => params.append("theatres", theatre));
    } else {
      params.delete("theatres");
    }

    const query = params.size ? "?" + params.toString() : "/";
    router.push(`${query}`);
  }, [selectedGenres, selectedTheatres]);

  return (
    <Flex gap="3">
      <Dropdown
        label="Genres"
        values={genres}
        selectedValues={selectedGenres}
        onChange={(genre, checked) => {
          if (checked) {
            setSelectedGenres([...selectedGenres, genre]);
          } else {
            setSelectedGenres(selectedGenres.filter((g) => g !== genre));
          }
        }}
      />
      <Dropdown
        label="Theatres"
        values={theatres.map((t) => t.name)}
        selectedValues={selectedTheatres}
        onChange={(theatre, checked) => {
          if (checked) {
            setSelectedTheatres([...selectedTheatres, theatre]);
          } else {
            setSelectedTheatres(selectedTheatres.filter((t) => t !== theatre));
          }
        }}
      />
    </Flex>
  );
};

export default Filters;
