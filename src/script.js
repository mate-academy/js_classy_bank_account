'use strict';

class Person {

   calculateAge(birthday) {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    constructor(name, birthday, money) {
        this.name = name;
        this.birthday = this.calculateAge(new Date (birthday.split('.').reverse().join(', ')));
        this.money = money;
        this.acount = [`Initial: ${money}`];
    }

    getInfo() {
        console.log(`Name: ${this.name}, Age: ${this.birthday}, Amount: ${this.money}$`);
    }

    addMoney(income, category) {
        this.money += income;
        this.acount.push(`${category}: ${income}`);
    }

    withdrawMoney(expense, category) {
        this.money -= expense;
        this.acount.push(`${category}: ${expense}`);
    }

    getAccountHistory() {
      console.log(this.acount);                                  
   } 
};

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']
pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$
