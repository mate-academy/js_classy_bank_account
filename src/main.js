class Person {
  constructor(name, birthday, amount) {
    this.name = name;
    this.birthday = birthday;
    this.initialAmount = amount;
    this.history = [`Initial: ${this.initialAmount}`];
  }

  getAge() {
    const currentDate = new Date();
    const birthDate = this.birthday.split('.');
    const months = currentDate.getMonth() - (birthDate[1] - 1);

    let age = currentDate.getFullYear() - birthDate[2];
    
    if (months < 0 || (months === 0 && currentDate.getDate() < birthDate[0])) {
      age--;
    }

    return age;
  };

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.getAge()}, Amount: ${this.initialAmount}$`);
  }

  addMoney(value, from) {
    this.initialAmount += value;
    this.history.push(`${from}: ${value}`);
  }

  withdrawMoney(value, asgmt) {
    this.initialAmount -= value;
    this.history.push(`${asgmt}: -${value}`);
  }

  getAccountHistory() {
    console.log(this.history);
  }
}

const kate = new Person('Kate', '26.09.1993', 5000);
const dmytro = new Person('Dmytro', '15.05.1992', 10000);

kate.getInfo();
kate.addMoney(10000, 'salary');
kate.withdrawMoney(800, 'new clothes');
kate.getInfo();
kate.withdrawMoney(2000, 'apartment rent');
kate.getAccountHistory();

dmytro.getInfo();