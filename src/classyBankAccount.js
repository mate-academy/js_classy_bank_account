class Person{
  constructor(name, birthday, amount){
    this.name = name;
    this.birthday = birthday;
    this.amount = amount;
    this.history = [{name: 'Initial', sum: this.amount}];
  }

  getAge(date) {
    const [day, month, year] = date.split('.');
    return new Date(new Date() - new Date(year, month, day)).getFullYear() - 1970;
  }

  getInfo() {
    return (`Name: ${this.name}, Age: ${this.getAge(this.birthday)}, Amount: ${this.amount}\$`);
  };

  addMoney(sum, transaction) {
    this.amount += sum;
    this.history.push({name: transaction, sum: sum});
  };

  withdrawMoney(sum, transaction) {
    this.amount -= sum;
    this.history.push({name: transaction, sum: sum});
  };

  getAccountHistory() {
    return this.history;
  };

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
