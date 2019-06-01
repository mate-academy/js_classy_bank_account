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
    const [day, month, year] = this.birthday.split('.');
    const age = new Date(Date.now() - +new Date(year, month, day)).getFullYear() -  new Date(0).getFullYear();
    
    return age;
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