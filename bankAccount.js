class Person {
    constructor(name = anonymous, dateOfBirth, amount = 0) {
      this.name = name;
      this.dateOfBirth = dateOfBirth;
      this.amount = amount;
      this.log = [];
  
      const [day, month, year] = dateOfBirth.split('.');
      this.day = +day;
      this.month = +month;
      this.year = +year;
      this.log = [{ transaction: 'Initial', amount: this.amount }];
    }
  
    getAge() {
      const yearNow = new Date().getFullYear();
      const monthNow = new Date().getMonth() + 1;
      const dayNow = new Date().getDate();
      let result = yearNow - this.year;
      if (monthNow === this.month && dayNow < this.day || monthNow < this.month) {
        return result - 1;
      }
  
      return result;
    }
  
    getInfo() {
      console.log(`Name: ${this.name}, Age: ${this.getAge()}, Amount: ${this.amount}$`);
    }
  
    transactions(info, money) {
      this.amount += money;
      this.log.push({ transaction: info, amount: money });
    }
  
    addMoney(money, info) {
      this.transactions(info, money);
    }
  
    withdrawMoney(money, info) {
      this.transactions(info, -money);
    }
  
    getAccountHistory() {
      const result = [];
      for (const value of this.log) {
        result.push(`${value.transaction}: ${value.amount}`);
      }
      return result;
    }
  };
    