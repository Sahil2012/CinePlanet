import { PrismaClient } from "@prisma/client";

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
    throw new Error("An error occured while fetching shows");
  }
};

export default {
  getAllShows,
};
