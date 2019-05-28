class Person {
  constructor(name, birth, money) {
    this.name = name;
    this.birthday = birth;
    this.money = money;
    this.info = [`Initial: ${money}`];
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.__calculateAge(this.birthday)}, Amount: ${this.money}$`)
  }

  addMoney(amount, info) {
    this.money += amount;
    this.info.push(`${info}: ${amount}`);
  }

  withdrawMoney(amount, info) {
    this.money -= amount;
    this.info.push(`${info}: -${amount}`);
  }

  getAccountHistory() {
    console.log(this.info);
  }

  __calculateAge(birthday) {
    const nowDate = new Date();
    const birthArray = birthday.split('.');
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1;
    const date = nowDate.getDate();
    let age;
    
    if(month < birthArray[1] || (month === birthArray[1] && date < birthArray[0])) {
      age = year - birthArray[2] - 1;
    }
    if((month === birthArray[1] && date >= birthArray[0]) || month > birthArray[1]) {
      age = year - birthArray[2];
    }
    return age;
  }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$