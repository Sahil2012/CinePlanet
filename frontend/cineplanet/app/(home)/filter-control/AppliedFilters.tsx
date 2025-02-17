import BadgeGroup from "@/_components/ui/BadgeGroup";
import { Button, Flex, Strong, Text } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  const areFiltersApplied =
    selectedGenres.length > 0 || selectedTheatres.length > 0;

  if (!searchQuery && !areFiltersApplied) {
    return null;
  }

  return (
    <Flex direction="column" gap="3">
      {areFiltersApplied && (
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
                setSelectedTheatres(
                  selectedTheatres.filter((t) => t !== theatre)
                );
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
      )}
      {searchQuery && (
        <Text className="mx-1 mt-2" size="4" color="gray">
          <em>
            Showing results for <Strong>&quot;{searchQuery}&quot;</Strong>
          </em>
        </Text>
      )}
    </Flex>
  );
};

export default AppliedFilters;
