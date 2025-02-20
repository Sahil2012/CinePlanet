"use client";

import { Genre } from "@/_services/GenreService";
import { Theatre } from "@/_services/TheatreService";
import { Box, Flex } from "@radix-ui/themes";
import { useState } from "react";
import AppliedFilters from "./AppliedFilters";
import Filters from "./Filters";
import SearchInput from "./SearchInput";

interface FilterControlProps {
  genres: Genre[];
  theatres: Theatre[];
}

const FilterControl = ({ genres, theatres }: FilterControlProps) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedTheatres, setSelectedTheatres] = useState<string[]>([]);

  return (
    <Flex direction="column" gap="4">
      <Flex gap="3">
        <Box width={{ initial: "100%", lg: "60%" }}>
          <SearchInput />
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
