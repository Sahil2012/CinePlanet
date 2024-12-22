import SeatService from "@/_services/SeatService";
import { Flex } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import SeatArrangement from "./seat-arrangement";

interface ShowPageProps {
  params: Promise<{
    id: string[];
  }>;
}

const ShowPage = async ({ params }: ShowPageProps) => {
  const [showId, theatreId] = (await params).id;
  if (!showId || !theatreId) {
    return notFound();
  }

  const seatArrangement = await SeatService.getSeatArrangement(theatreId, showId);
  if (!seatArrangement) {
    return notFound();
  }

  return (
    <Flex justify="center" align="center" className="relative h-[var(--main-area-height)]">
      <SeatArrangement seatArrangement={seatArrangement} />
    </Flex>
  );
};

export default ShowPage;
