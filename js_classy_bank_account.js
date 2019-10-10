class Person {
  constructor(name, dateOfBirth, amount) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.amount = amount;
    this.age = this.getAge(this.dateOfBirth);
    this.accountHistory = [`'Initial: ${this.amount}'`];
  }

  getAge (dateOfBirth) {
    const dateArr = dateOfBirth.split('.');
    const year = dateArr[2];
    const month = dateArr[1];
    const day = dateArr[0];
    const yearNow = new Date().getFullYear();
    const monthNow = new Date().getMonth() + 1;
    const dayNow = new Date().getDate();
    return (monthNow === month && dayNow < day || monthNow < month) ?
    yearNow - year - 1 : yearNow - year;
  }

  getInfo () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}\$`);
  }

  addMoney (money, info) {
    this.amount += money;
    this.accountHistory.push(`'${info}: ${money}'`);
  }

  withdrawMoney (money, info) {
    this.amount -= money;
    this.accountHistory.push(`'${info}: -${money}'`);
  }

  getAccountHistory () {
    console.log(`[ ${this.accountHistory.join(', ')}]`);
  }
}


const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$