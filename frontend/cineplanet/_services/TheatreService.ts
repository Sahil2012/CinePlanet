const data = [
  {
    id: '1',
    name: 'Theatre 1'
  },
  {
    id: '2',
    name: 'Theatre 2'
  },
  {
    id: '3',
    name: 'Theatre 3'
  }
]

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
}

export default new TheatreService();
