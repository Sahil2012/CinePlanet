const data: Show[] = [
  {
    id: "1",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713702000000,
    theatreName: "Grand Cinema Hall",
  }, // 10:00 AM
  {
    id: "2",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713712800000,
    theatreName: "Grand Cinema Hall",
  }, // 01:00 PM
  {
    id: "3",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713723600000,
    theatreName: "Grand Cinema Hall",
  }, // 04:00 PM
  {
    id: "11",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713702000000,
    theatreName: "Grand Cinema Hall",
  }, // 10:00 AM
  {
    id: "12",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713712800000,
    theatreName: "Grand Cinema Hall",
  }, // 01:00 PM
  {
    id: "13",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713723600000,
    theatreName: "Grand Cinema Hall",
  }, // 04:00 PM
  {
    id: "14",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713702000000,
    theatreName: "Grand Cinema Hall",
  }, // 10:00 AM
  {
    id: "15",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713712800000,
    theatreName: "Grand Cinema Hall",
  }, // 01:00 PM
  {
    id: "16",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713723600000,
    theatreName: "Grand Cinema Hall",
  }, // 04:00 PM
  {
    id: "4",
    theatreId: "2",
    movieId: "1",
    timestamp: 1713705600000,
    theatreName: "Cineplex Deluxe",
  }, // 11:00 AM
  {
    id: "5",
    theatreId: "2",
    movieId: "1",
    timestamp: 1713716400000,
    theatreName: "Cineplex Deluxe",
  }, // 02:00 PM
  {
    id: "6",
    theatreId: "2",
    movieId: "1",
    timestamp: 1713727200000,
    theatreName: "Cineplex Deluxe",
  }, // 05:00 PM
  {
    id: "7",
    theatreId: "3",
    movieId: "1",
    timestamp: 1713709200000,
    theatreName: "Star Movie Theatre",
  }, // 12:00 PM
  {
    id: "8",
    theatreId: "3",
    movieId: "1",
    timestamp: 1713720000000,
    theatreName: "Star Movie Theatre",
  }, // 03:00 PM
  {
    id: "9",
    theatreId: "3",
    movieId: "1",
    timestamp: 1713711000000,
    theatreName: "Star Movie Theatre",
  }, // 12:30 PM
  {
    id: "10",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713721800000,
    theatreName: "Grand Cinema Hall",
  }, // 03:30 PM
];

const seatArrangement: Status[][] = [
  [
    "AVAILABLE",
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
  ],
  [
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
  ],
  [
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "AVAILABLE",
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
  ],
  [
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
  ],
  [
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
  ],
  [
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
  ],
  [
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
  ],
  [
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "NA",
    "AVAILABLE",
    "AVAILABLE",
    "NA",
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
  ],
  [
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
    "NA",
    "AVAILABLE",
    "AVAILABLE",
    "NA",
    "AVAILABLE",
    "BLOCKED",
    "BLOCKED",
  ],
  [
    "AVAILABLE",
    "AVAILABLE",
    "AVAILABLE",
    "NA",
    "AVAILABLE",
    "AVAILABLE",
    "NA",
    "BLOCKED",
    "BLOCKED",
    "BLOCKED",
  ],
];

export type Status = "AVAILABLE" | "BLOCKED" | "NA";

export interface Show {
  id: string;
  theatreId: string;
  theatreName: string;
  movieId: string;
  timestamp: number;
}

class ShowService {
  getShows(movieId: string, date: number): Promise<Show[]> {
    const shows = new Promise<Show[]>((res) => {
      setTimeout(() => {
        res(data.filter((show) => show.movieId === movieId));
      }, 10);
    });
    return shows;
  }

  getShowArrangement(theatreId: string, showId: string) {
    return new Promise<Status[][]>((res) => {
      setTimeout(() => {
        res(seatArrangement);
      }, 10);
    });
  }
}

export default new ShowService();
