class Person {
  constructor(name, birthDate, amount) {
    this.name = name;
    this.birthDate = birthDate;
    this.age = this.getAge(birthDate);
    this.amount = amount;
    this.accountHistory = [
      { 'Initial': this.amount },
    ];
  }

  getAge(birthDate) {
    const birthDateArr = birthDate.split('.');
    const year = birthDateArr[2];
    const month = birthDateArr[1];
    const day = birthDateArr[0];
    let yearNow = new Date().getFullYear();
    let monthNow = new Date().getMonth() + 1;
    let dayNow = new Date().getDate();
    const result = (yearNow - year);
    return (monthNow === month && dayNow < day || monthNow < month)
      ? result - 1
      : result;
  }

  getInfo() {
    return (`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}$`);
  }

  addToAccountHistory(amountOfMoney, purpose) {
    this.amount += amountOfMoney;
    this.accountHistory.push({ "Purpose": purpose, "Amount of money": amountOfMoney });
  }

  addMoney(amountOfMoney, purpose) {
    this.addToAccountHistory(amountOfMoney, purpose);
  }

  withdrawMoney(amountOfMoney, purpose) {
    this.addToAccountHistory(-amountOfMoney, purpose);
  }

  getAccountHistory() {
    return this.accountHistory;
  }
}


// Usage

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

//Tests

console.log(dmytro.getInfo()); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
console.log(dmytro.addMoney(2000, 'salary'));
console.log(dmytro.withdrawMoney(500, 'new phone'));
console.log(dmytro.getInfo()); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
console.log(dmytro.withdrawMoney(500, 'apartment rent'));
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // Name: Pavel, Age: <calculate yourself>, Amount: 400$
pavel.addMoney(800, 'salary');
pavel.withdrawMoney(20, 'cappuccino');
pavel.withdrawMoney(180, 'theatre');
pavel.withdrawMoney(480, 'iphone 6s');
pavel.getInfo(); // Name: Pavel, Age: <calculate yourself>, Amount: 520$
pavel.getAccountHistory(); // [ 'Initial: 400', 'salary: 800', 'cappuccino: -20', 'theatre: -180', 'iphone 6s: -480']