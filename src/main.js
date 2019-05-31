class Person {
  constructor(name, birthday, amount) {
    this.name = name;
    this.birthday = birthday;
    this.initialAmount = amount;
    this.history = [{Initial: this.initialAmount}];
  }

  getAge() {
    const currentDate = new Date();
    const birthDate = this.birthday.split('.');
    const birthYear = birthDate[2];
    const birthMonth = (birthDate[1] - 1);
    const birthDay = birthDate[0];
    const months = currentDate.getMonth() - birthMonth;

    let age = currentDate.getFullYear() - birthYear;
    
    if (months < 0 || (months === 0 && currentDate.getDate() < birthDay)) {
      age--;
    }

    return age;
  };

  getInfo() {
    return `Name: ${this.name}, Age: ${this.getAge()}, Amount: ${this.initialAmount}$`;
  }

  addMoney(value, from) {
    this.initialAmount += value;
    this.createAccountHistory(from, value);
  }

  withdrawMoney(value, asgmt) {
    this.initialAmount -= value;
    this.createAccountHistory(asgmt, -value);
  }

  createAccountHistory(key, value) {
    const operation = {};
    operation[key] = value;
    this.history.push(operation);
  }

  getAccountHistory() {
    return this.history;
  }
}

const kate = new Person('Kate', '26.09.1993', 5000);
const dmytro = new Person('Dmytro', '01.06.1992', 10000);

kate.getInfo();
kate.addMoney(10000, 'salary');
kate.withdrawMoney(800, 'new clothes');
kate.getInfo();
kate.withdrawMoney(2000, 'apartment rent');
kate.getAccountHistory();

dmytro.getInfo();