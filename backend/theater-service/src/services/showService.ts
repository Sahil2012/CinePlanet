import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllShows = async (movieName: string) => {
  try {
    const shows = await prisma.show.findMany({
      where: {
        movieName
      },
      include: {
        screen: true,
        movie: true
      }
    });

    return shows;
  } catch (error) {
    throw new Error('An error occurred while fetching shows');
  }
};

export default {
  getAllShows
};
