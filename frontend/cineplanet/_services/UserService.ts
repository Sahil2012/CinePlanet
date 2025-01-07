export interface Money {
  rupees: number;
  paise: number;
}

class UserService {
  getWalletBalance(): Promise<Money> {
    return new Promise<Money>((res) => {
      setTimeout(() => {
        res({
          rupees: 100,
          paise: 50,
        });
      }, 2000);
    });
  }

  addMoney(amount: Money): Promise<boolean> {
    return new Promise<boolean>((res) => {
      setTimeout(() => {
        res(true);
      }, 2000);
    });
  }
}

export default new UserService();
