"use sctrict";

class Person {
  constructor(name, birthDate, amount) {
    this.name = name;
    this.amount = amount;
    this.birthDate = birthDate;
    this.history = [`initial: ${amount}`];
  }

  getAge() {
    const birth = this.birthDate.split(".").reverse();
    const dateofBirth = new Date(birth);
    const ageDifMs = Date.now() - dateofBirth.getTime();
    const ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  addMoney(currency, reason) {
    this.amount += currency;
    this.history.push(`${reason}: ${currency}`);
  }

  withdrawMoney(spendMoney, reason) {
    this.amount -= spendMoney;
    this.history.push(`${reason}: ${-spendMoney}`);
  }

  getInfo() {
    console.log(
      `Name: ${this.name}, Age: ${this.getAge()}, Amount: ${this.amount}$`
    );
  }

  getAccountHistory() {
    console.log(this.history);
  }
}

const dmytro = new Person("Dmytro", "26.11.1994", 1000);
const pavel = new Person("Pavel", "06.06.1990", 400);

dmytro.getInfo();
dmytro.addMoney(2000, "salary");
dmytro.withdrawMoney(500, "new phone");
dmytro.getInfo();
dmytro.withdrawMoney(500, "apartment rent");
dmytro.getAccountHistory();
