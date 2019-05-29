class Person {
  constructor(name, birth, amountOfMoney) {
    this.name = name;
    this.birth = birth.split('.').reverse();
    this.amountOfMoney = amountOfMoney;
    this.transactions = [`Initial: ${amountOfMoney}`];
  }
  
  age() {
    return new Date(Date.now() - new Date(this.birth).getTime()).getFullYear() - 1970
  }

  getInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age()}, Amount: ${this.amountOfMoney}`);
  }
  addMoney(digit, transaction) {
      this.amountOfMoney += digit;
      this.transactions.push(` ${transaction} : ${digit}`);
  }
  
  withdrawMoney(digit, transaction) {
    this.amountOfMoney -= digit;
    this.transactions.push(` ${transaction} : -${digit}`);
  }
  
  getAcountHystory() {
    console.log(`${this.transactions}`);
  }
}