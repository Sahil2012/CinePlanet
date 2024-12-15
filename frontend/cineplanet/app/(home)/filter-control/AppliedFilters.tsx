import BadgeGroup from "@/_components/ui/BadgeGroup";
import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";

interface AppliedFiltersProps {
  selectedGenres: string[];
  selectedTheatres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedTheatres: React.Dispatch<React.SetStateAction<string[]>>;
}

const AppliedFilters = ({
  selectedGenres,
  selectedTheatres,
  setSelectedGenres,
  setSelectedTheatres,
}: AppliedFiltersProps) => {
  if (selectedGenres.length === 0 && selectedTheatres.length === 0) {
    return null;
  }

  return (
    <Flex justify="between" align="center">
      <Flex gap="3" align="center">
        <Text className="mx-1">Filters</Text>
        <BadgeGroup
          values={selectedGenres}
          onCancel={(genre) => {
            setSelectedGenres(selectedGenres.filter((g) => g !== genre));
          }}
        />
        <BadgeGroup
          values={selectedTheatres}
          onCancel={(theatre) => {
            setSelectedTheatres(selectedTheatres.filter((t) => t !== theatre));
          }}
        />
      </Flex>
      <Button
        variant="soft"
        onClick={() => {
          setSelectedGenres([]);
          setSelectedTheatres([]);
        }}
      >
        Clear filters
      </Button>
    </Flex>
  );
};

export default AppliedFilters;
