'use strict';

class Person {

    constructor(name, birthday, money) {
        this.name = name;
        this.birthday = this.calculateAge(new Date (birthday.split('.').reverse().join(', ')));
        this.money = money;
        this.acount = [{Initial: this.money}];
    }

    calculateAge(birthday) {
        return Math.floor((Date.now()-Date.parse(birthday))/(60*60*24*366*1000));
    }

    getInfo() {
       return `Name: ${this.name}, Age: ${this.birthday}, Amount: ${this.money}$`;
    }

    addMoney(income, category) {
        this.category = category;
        this.income = income;
        this.money += income;
        this.history(this.income, this.category);
    }

    withdrawMoney(expense, category) {
        this.category = category;
        this.expense = expense;
        this.money -= expense;
        this.history(-this.expense, this.category);
    }

    history(amount, category) {
       return this.acount.push({[category]: amount})
    }

    getAccountHistory() {
      return this.acount;                                  
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
    console.log(person.getInfo());
    
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
    console.log(person.getAccountHistory());
})