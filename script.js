'use strict';

class Person_account {
  constructor(person_name, person_birth_date, person_money_amount) {
    this.person_name = person_name;
    this.person_birth_date = person_birth_date;
    this.person_money_amount = person_money_amount;
    this.person_age = this.get_person_age();
    this.initial_balance = `Initial: ${person_money_amount}`;
    this.account_history = [this.initial_balance];
  }

  get_person_age() {
    const date_now = new Date();
    const year_now = date_now.getFullYear();
    const person_born_year = this.person_birth_date.slice(-4);
    const person_age = year_now - person_born_year;
    return person_age;
  }

  get_info() {
    console.log(`Name: ${this.person_name}, Age: ${this.person_age}, Amount: ${this.person_money_amount}$`);
  }

  add_money(sum, info) {
    const minus = false;
    this.person_money_amount += sum;
    this.save_account_history(sum, info, minus);
  }

  withdraw_money(sum, info) {
    const minus = true;
    this.person_money_amount -= sum;
    this.save_account_history(sum, info, minus);
  }

  getAccountHistory() {
    console.log(this.account_history);
  }

  save_account_history(sum, info, minus) {
    const user_action = minus ? `${info}: -${sum}` : `${info}: ${sum}`;
    this.account_history.push(user_action);
  }
}
