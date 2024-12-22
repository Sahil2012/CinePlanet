const data: Show[] = [
  {
    id: "1",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713702000000,
    theatreName: "Grand Cinema Hall",
    language: "English",
  }, // 10:00 AM
  {
    id: "2",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713712800000,
    theatreName: "Grand Cinema Hall",
    language: "Hindi",
  }, // 01:00 PM
  {
    id: "3",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713723600000,
    theatreName: "Grand Cinema Hall",
    language: "Hindi",
  }, // 04:00 PM
  {
    id: "11",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713702000000,
    theatreName: "Grand Cinema Hall",
    language: "English",
  }, // 10:00 AM
  {
    id: "12",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713712800000,
    theatreName: "Grand Cinema Hall",
    language: "English",
  }, // 01:00 PM
  {
    id: "13",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713723600000,
    theatreName: "Grand Cinema Hall",
    language: "English",
  }, // 04:00 PM
  {
    id: "14",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713702000000,
    theatreName: "Grand Cinema Hall",
    language: "English",
  }, // 10:00 AM
  {
    id: "15",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713712800000,
    theatreName: "Grand Cinema Hall",
    language: "English",
  }, // 01:00 PM
  {
    id: "16",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713723600000,
    theatreName: "Grand Cinema Hall",
    language: "English",
  }, // 04:00 PM
  {
    id: "4",
    theatreId: "2",
    movieId: "1",
    timestamp: 1713705600000,
    theatreName: "Cineplex Deluxe",
    language: "English",
  }, // 11:00 AM
  {
    id: "5",
    theatreId: "2",
    movieId: "1",
    timestamp: 1713716400000,
    theatreName: "Cineplex Deluxe",
    language: "English",
  }, // 02:00 PM
  {
    id: "6",
    theatreId: "2",
    movieId: "1",
    timestamp: 1713727200000,
    theatreName: "Cineplex Deluxe",
    language: "English",
  }, // 05:00 PM
  {
    id: "7",
    theatreId: "3",
    movieId: "1",
    timestamp: 1713709200000,
    theatreName: "Star Movie Theatre",
    language: "English",
  }, // 12:00 PM
  {
    id: "8",
    theatreId: "3",
    movieId: "1",
    timestamp: 1713720000000,
    theatreName: "Star Movie Theatre",
    language: "English",
  }, // 03:00 PM
  {
    id: "9",
    theatreId: "3",
    movieId: "1",
    timestamp: 1713711000000,
    theatreName: "Star Movie Theatre",
    language: "English",
  }, // 12:30 PM
  {
    id: "10",
    theatreId: "1",
    movieId: "1",
    timestamp: 1713721800000,
    theatreName: "Grand Cinema Hall",
    language: "English",
  }, // 03:30 PM
];

export interface Show {
  id: string;
  theatreId: string;
  theatreName: string;
  movieId: string;
  timestamp: number;
  language: string;
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

  getShow(showId: string, theatreId: string): Promise<Show | undefined> {
    const show = new Promise<Show | undefined>((res) => {
      setTimeout(() => {
        res(
          data.find(
            (show) => show.id === showId && show.theatreId === theatreId
          )
        );
      }, 10);
    });
    return show;
  }
}

export default new ShowService();
