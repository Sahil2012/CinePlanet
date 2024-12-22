const data = [
  {
    id: "1",
    name: "Theatre 1",
  },
  {
    id: "2",
    name: "Theatre 2",
  },
  {
    id: "3",
    name: "Theatre 3",
  },
];

export interface Theatre {
  id: string;
  name: string;
}

class TheatreService {
  getTheatres(): Promise<Theatre[]> {
    const theatres = new Promise<Theatre[]>((res) => {
      setTimeout(() => {
        res(data);
      }, 10);
    });
    return theatres;
  }

  getTheatre(theatreId: string): Promise<Theatre | undefined> {
    const theatre = new Promise<Theatre | undefined>((res) => {
      setTimeout(() => {
        res(data.find((theatre) => theatre.id === theatreId));
      }, 10);
    });
    return theatre;
  }
}

export default new TheatreService();
