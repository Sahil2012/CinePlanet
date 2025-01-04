import { groupBy } from "@/_lib/utils";
import ShowService from "@/_services/ShowService";
import { Text, Flex, Table } from "@radix-ui/themes";
import TheatreDetails from "./TheatreDetails";
import TheatreShowList from "./TheatreShowList";

interface ShowListProps {
  movieId: string;
  date: number;
}

const ShowList = async ({ movieId, date: selectedDate }: ShowListProps) => {
  const shows = await ShowService.getShows(movieId, selectedDate);
  const showsGroupedByTheatres = groupBy(shows, "theatreName");

  if (!shows || shows.length < 1) {
    return (
      <Flex justify="center" align="center" pt="8">
        <Text color="gray">Currently there are no shows are available for this movie.</Text>
      </Flex>
    );
  }

  return (
    <Table.Root className="p-5">
      <Table.Body>
        {Object.keys(showsGroupedByTheatres).map((theatreName) => (
          <Table.Row key={theatreName}>
            <Table.RowHeaderCell width="35%">
              <TheatreDetails theatreName={theatreName} />
            </Table.RowHeaderCell>
            <Table.Cell width="60%">
              <TheatreShowList
                key={theatreName}
                shows={showsGroupedByTheatres[theatreName]}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default ShowList;
