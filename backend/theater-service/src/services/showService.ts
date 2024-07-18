import { PrismaClient, SeatStatus, SeatsOnShows } from "@prisma/client";

const prisma = new PrismaClient();

const getAllShows = async (movieName: string) => {
  try {
    return await prisma.show.findMany({
      where: {
        movie: {
          name: movieName,
        },
      },
      include: {
        screen: true,
        movie: true,
      },
    });
  } catch (error) {
    throw new Error("Some error occured while fetching shows");
  }
};

const updateSeatsStatus = async (
  showId: number,
  seats: SeatsOnShows[],
  status: SeatStatus
) => {
  try {
    return await prisma.seatsOnShows.updateMany({
      where: {
        showId: showId,
        seatId: {
          in: seats.map((seat) => seat.seatId),
        },
      },
      data: {
        status: status,
      },
    });
  } catch (err) {
    throw new Error("Some error occured while updating seats status");
  }
};

export default {
  getAllShows,
  updateSeatsStatus,
};
