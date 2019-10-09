class Person {
  constructor(name, birthDate, amount) {
    this.name = name;
    this.birthDate = birthDate;
    this.amount = amount;
    this.age = getAge(this.birthDate);
    this.accountHistory = [`Initial: ${this.amount}`];
  }

  getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Amount: ${this.amount}\$`);
  }

  addMoney(amount, source) {
    this.amount += amount;
    this.accountHistory.push(`${source}: ${amount}`);
  }

  withdrawMoney(amount, target) {
    this.amount -= amount;
    this.accountHistory.push(`${target}: -${amount}`);
  }

  getAccountHistory() {
    console.log(this.accountHistory);
  }

}

function getAge(birthDate) {
  const normalizeDate = birthDate.split('.');
  let tmp = normalizeDate[0];
  normalizeDate[0] = normalizeDate[1];
  normalizeDate[1] = tmp;
  birthDate = normalizeDate.join('.')
  let age = Math.abs(new Date(Date.now() - Date.parse(birthDate)).getUTCFullYear() - 1970);
  return age;
}