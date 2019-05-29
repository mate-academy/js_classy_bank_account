function calculateAge(date) {
  const birthDate = date.split('.').reverse().join();
  const ageDifMs = Date.now() - new Date(birthDate).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

class Person {
  constructor(name, birthDate, amount) {
    this.name = name;
    this.birthDate = birthDate;
    this.amount = amount;
    this.accontHistory = [`Initial: ${amount}`];
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${calculateAge(this.birthDate)}  Amount: ${this.amount}`);
  }

  addMoney(income, transaction) {
    this.amount += income;
    this.accontHistory.push(`${transaction}: ${income}`);
  }

  withdrawMoney(withdrawal, transaction) {
    this.amount -= withdrawal;
    this.accontHistory.push(`${transaction}: -${withdrawal}`);
  }

  getAccountHistory() {
    console.log(this.accontHistory);
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





