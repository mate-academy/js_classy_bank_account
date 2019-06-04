class Human {
  constructor (name, birthday, money) {
    this.name =  name;
    this.birthday = birthday;
    this.money = money;
    this.history = [
      {
        info: 'initial',
        amount: money,
      }
    ];
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.humanAge()}, Amount: ${this.money}$`);
  }

  humanAge() {
    const birthdayRev = new Date(this.birthday.split('.').reverse());
    const ageDifMs = Date.now() - birthdayRev.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }


  addMoney(cash, str) {
    this.money += cash;
    this.addHistory(cash, str);
  }

  withdrawMoney(cash, str) {
    this.money -= cash;
    this.addHistory(`-${cash}`, str);
  }


  getAccountHistory() {
    const accountHistory = this.history.map(item => {
      return `${item.info}: ${item.amount}`;
    });
    console.log(accountHistory);
  }

  addHistory(cash, str) {
    this.history.push(
      {
      info: str,
      amount: cash
    }
  )
  }
}

const dmytro = new Human('Dmytro', '26.11.1994', 1000);
const pavel = new Human('Pavel', '06.06.1990', 400);

dmytro.getInfo();
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo();
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory();
pavel.getInfo();
