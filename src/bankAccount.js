'use strict';

class BankAccount {
  constructor(name, initial) {
    this.name = name;

    this.history = {
      'Initial': initial,
    };
  }

  _getAmount() {
    const values = Object.values(this.history);

    return values.reduce((sum, money) => sum + money);
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this._getAmount()}$`;
  }

  getAccountHistory() {
    const entries = Object.entries(this.history);

    return entries.map(entry => entry.join(': '));
  }

  addMoney(value, operation) {
    this.history[operation] = value;
  }

  withdrawMoney(value, operation) {
    this.history[operation] = -value;
  }
};

module.exports = {
  BankAccount,
};
