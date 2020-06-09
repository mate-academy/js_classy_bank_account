'use strict';

class BankAccount {
  constructor(name, initial) {
    this.name = name;

    this.history = {
      'Initial': initial,
    };
  }

  _getAmount() {
    return Object.values(this.history)
      .reduce((sum, money) => sum + money);
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this._getAmount()}$`;
  }

  getAccountHistory() {
    return Object.entries(this.history)
      .map(entry => entry.join(': '));
  }

  addMoney(value, valueName) {
    this.history[valueName] = value;
  }

  withdrawMoney(value, valueName) {
    this.history[valueName] = -value;
  }
};

module.exports = {
  BankAccount,
};
