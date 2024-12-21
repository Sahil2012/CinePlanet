import { Show } from "@/_services/ShowService";
import { Flex } from "@radix-ui/themes";
import TheatreShowButton from "./TheatreShowButton";

interface TheatreShowListProps {
  shows: Show[];
}

const TheatreShowList = ({ shows }: TheatreShowListProps) => {
  if (shows.length === 0) {
    return null;
  }

  return (
    <Flex className="w-full flex-wrap gap-3 py-4">
      {shows.map((show) => (
        <TheatreShowButton key={`${show.id}_${show.theatreId}`} show={show} />
      ))}
    </Flex>
  );
};

export default TheatreShowList;
