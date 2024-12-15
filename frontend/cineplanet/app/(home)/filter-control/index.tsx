"use client";

import { Genre } from "@/_services/GenreService";
import { Theatre } from "@/_services/TheatreService";
import { Box, Flex, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import AppliedFilters from "./AppliedFilters";
import Filters from "./Filters";

interface FilterControlProps {
  genres: Genre[];
  theatres: Theatre[];
}

const FilterControl = ({ genres, theatres }: FilterControlProps) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedTheatres, setSelectedTheatres] = useState<string[]>([]);

  return (
    <Flex direction="column" gap="5">
      <Flex gap="3">
        <Box width={{ initial: "100%", lg: "60%" }}>
          <TextField.Root
            variant="soft"
            size="3"
            placeholder="Search for movies"
          >
            <TextField.Slot>
              <FaSearch />
            </TextField.Slot>
          </TextField.Root>
        </Box>
        <Filters
          genres={genres}
          theatres={theatres}
          selectedGenres={selectedGenres}
          selectedTheatres={selectedTheatres}
          setSelectedGenres={setSelectedGenres}
          setSelectedTheatres={setSelectedTheatres}
        />
      </Flex>
      <AppliedFilters
        selectedGenres={selectedGenres}
        selectedTheatres={selectedTheatres}
        setSelectedGenres={setSelectedGenres}
        setSelectedTheatres={setSelectedTheatres}
      />
    </Flex>
  );
};

export default FilterControl;
