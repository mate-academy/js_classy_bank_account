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
        this.acount.push(`${category}: -${expense}`);
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

const form = document.forms[0];
let nameInput = '';
let birthdayInput = '';
let amountInput = 0;
let person = null;
let amountIncome = 0;
let categoryIncome = '';
let amountExpense = 0;
let categoryExpense = '';

//создание аккаунта
form.name.addEventListener('blur', (event)=>{nameInput = event.target.value});
form.birthday.addEventListener('blur', (event)=>{birthdayInput = event.target.value});
form.amount.addEventListener('blur', (event)=>{amountInput = +event.target.value;});

form.submit.addEventListener('click', (event) => {
    event.preventDefault();
    person = new Person(nameInput, birthdayInput, amountInput);
    alert(`You created a new account. Open the console and click on the button "Show account"`)
})

//отображение информации
form.show.addEventListener('click', (event)=>{
    event.preventDefault();
    person.getInfo();
})

//переключатель
document.getElementById('checkbox').addEventListener('click', ()=> {
    document.getElementById('information').classList.toggle('hidden');
})

//добавление дохода
document.getElementById('income').children[1].addEventListener('blur', (event)=>{amountIncome = +event.target.value});
document.getElementById('income').children[2].addEventListener('blur', (event)=>{categoryIncome = event.target.value});

document.getElementById('income').children[3].addEventListener('click', (event) => {
    event.preventDefault();
    person.addMoney(amountIncome, categoryIncome);
    alert(`You added an income. Click on the button "Show account"`)
})

//добавление рассхода
document.getElementById('expense').children[1].addEventListener('blur', (event)=>{amountExpense  = +event.target.value});
document.getElementById('expense').children[2].addEventListener('blur', (event)=>{categoryExpense = event.target.value});

document.getElementById('expense').children[3].addEventListener('click', (event) => {
    event.preventDefault();
    person.withdrawMoney(amountExpense, categoryExpense);
    alert(`You added an expense. Click on the button "Show account"`)
})

//показ истории
document.getElementById('history').addEventListener('click', (event) => {
    event.preventDefault();
    person.getAccountHistory();
})