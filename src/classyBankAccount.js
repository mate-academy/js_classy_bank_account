class Person {
  constructor(name, date, amount) {
    this.name = name; 
    this.date = date;
    this.amount = amount; 
    this.accountHistory = {Initial: amount}; 
  }

  _getAge(date) {
    const birthDay = date.split('.')[0]; 
    const birthMonth = date.split('.')[1]; 
    const birthYear = date.split('.')[2]; 
    let yearNow = new Date().getFullYear();
    let monthNow = new Date().getMonth() + 1;
    let dayNow = new Date().getDate();

    let age = (monthNow === birthMonth && dayNow < birthDay || monthNow < birthMonth) ? yearNow - birthYear - 1 : yearNow - birthYear;
    return this.age = age; 
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this._getAge(this.date)}, Amount: ${this.amount}$`; 
  }

  addHistory(money, info) {
    this.amount += money; 
    this.accountHistory[info] =  money; 
  }
  
  addMoney(money, info) {
    this.addHistory(money, info); 
  };
  
  withdrawMoney(money, info) {
    this.addHistory(-money, info); 
  };

  getAccountHistory() {
    let arr = []; 
    for (let items of Object.entries(this.accountHistory)) {
      arr.push(items.join(': ')); 
    }
    return arr.join(", ");
  }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: <calculate yourself>, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
console.log(dmytro.getInfo()); // Name: Dmytro, Age: <calculate yourself>, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
console.log(dmytro.getAccountHistory()); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: <calculate yourself>, Amount: 400$
