class Person {
  constructor(name, birthDate, amount) {
    this.name = name;
    this.birthDate = birthDate;
    this.age = this.getAge(birthDate);
    this.amount = amount;
    this.accountHistory = [`Initial: ${this.amount}`];
  }

  getAge(birthDate) {
    const birthDateArr = birthDate.split('.');
    const year = birthDateArr[2];
    const month = birthDateArr[1];
    const day = birthDateArr[0];
    let yearNow = new Date().getFullYear();
    let monthNow = new Date().getMonth() + 1;
    let dayNow = new Date().getDate();
    if (monthNow === month && dayNow < day || monthNow < month) {
      return yearNow - year - 1;
    } else {
      return yearNow - year;
    }
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`);
  }

  addMoney(addSum, proceeds) {
    this.amount += addSum;
    this.accountHistory.push(`${proceeds}: ${addSum}`);
  }

  withdrawMoney(withdrawSum, spentMoney) {
    this.amount -= withdrawSum;
    this.accountHistory.push(`${spentMoney}: -${withdrawSum}`);
  }

  getAccountHistory() {
    console.log(this.accountHistory);
  }
}


// Usage

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

//Tests

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // Name: Pavel, Age: <calculate yourself>, Amount: 400$
pavel.addMoney(800, 'salary');
pavel.withdrawMoney(20, 'cappuccino');
pavel.withdrawMoney(180, 'theatre');
pavel.withdrawMoney(480, 'iphone 6s');
pavel.getInfo(); // Name: Pavel, Age: <calculate yourself>, Amount: 520$
pavel.getAccountHistory(); // [ 'Initial: 400', 'salary: 800', 'cappuccino: -20', 'theatre: -180', 'iphone 6s: -480']