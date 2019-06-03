class Person {
  constructor(name, birthday, money) {
      this.name = name;
      this.birthday = new Date(...birthday.split('.').reverse());
      this.money = money;
      this.history = [
        {
          info: 'Initial',
          amount: money,
          timestamp: new Date()
        }
      ];
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.getClientAge()}, Amount: ${this.money}$`)
  }

  addMoney(cash, infoAboutCash) {
    this.money += cash;
    this.logHistory(cash, infoAboutCash);
  }

  withdrawMoney(cash, infoAboutCash) {
    this.money -= cash;
    this.logHistory(`-${cash}`, infoAboutCash);
  }

  getAccountHistory() {
    const accountHistory = this.history.map(item => {
      return `${item.infoAboutCash}: ${item.amount}`;
    });
    console.log(accountHistory);
  }

  getClientAge() {
    const ageDifMs = Date.now() - this.birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  logHistory(cash, infoAboutCash) {
    this.history.push(
      {
        info: infoAboutCash,
        amount: cash,
        timestamp: new Date()
      }
    );
  }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo();
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo();
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory();

pavel.getInfo();
