
class Person {
  constructor(name, dateOfBirth, amountMoney) {
  this.transaction = [];
  this.name = name;
  this.dateOfBirth = new Date (dateOfBirth.replace( /\./g,',').split(",").reverse().join("."));
  this.amountMoney = amountMoney;
  this.transaction.push(`Initial: ${amountMoney}`);
    }
  
  getInfo() {
    let age = this.checkYearsDifference(this.dateOfBirth);
    console.log(`Name: ${this.name}, Age: ${age}, Amount: ${this.amountMoney}$`);
  }

  addMoney(amount, descript) {
    this.amountMoney = this.amountMoney + amount;
    this.transaction.push(`${descript}: ${amount}`)

  }
  
  withdrawMoney(amount, descript) {
    this.amountMoney = this.amountMoney - amount;
    this.transaction.push(`${descript}: -${amount}`);
  }

  getAccountHistory() {
    console.log(this.transaction);

}

checkYearsDifference (birthDayDate) {
  var todayDate = new Date();
  var thisMonth = todayDate.getMonth();
  var thisYear = todayDate.getFullYear();
  var thisDay = todayDate.getDate();
  var monthBirthday = birthDayDate.getMonth(); 
  var yearBirthday = birthDayDate.getFullYear();
  var dayBirthday = birthDayDate.getDate();
  var yearDifference = thisYear - yearBirthday;
  if (thisMonth == monthBirthday){
    if (thisDay<dayBirthday){
      yearDifference = yearDifference -1;
    }
  }
  else {
    if (thisMonth < monthBirthday) {
      yearDifference = yearDifference -1;
    }
  }
  return yearDifference;
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

