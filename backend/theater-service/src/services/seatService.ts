import { PrismaClient } from "@prisma/client";

class SeatService {
  private prisma = new PrismaClient();

  async getAllSeats(showId: number) {
    try {
      return await this.prisma.seatsOnShows.findMany({
        where: {
          showId,
        },
        include: {
          seat: true,
        },
      });
    } catch (err) {
      throw new Error("Some error occured while fetching seats");
    }
  }
}

export default SeatService;
