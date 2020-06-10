'use strict';

const { BankAccount } = require('./bankAccount');

describe('BankAccount', () => {
  it('Can be used as a constructor', () => {
    const account = new BankAccount('Dmytro', '24.10.1996', 1000);

    expect(account)
      .toBeInstanceOf(BankAccount);
  });

  it('Should have an account info', () => {
    const account = new BankAccount('Dmytro', '24.10.1996', 1000);

    expect(account.getInfo())
      .toBe(`Name: Dmytro, Age: 23, Amount: 1000$`);
  });

  it('Should have an initial history', () => {
    const account = new BankAccount('Dmytro', '24.10.1996', 1000);
    const history = account.getAccountHistory();

    expect(history)
      .toBeInstanceOf(Array);

    expect(history)
      .toHaveLength(1);

    expect(history[0])
      .toBe('Initial: 1000');
  });

  it('Should add money', () => {
    const account = new BankAccount('Oleg', '19.11.1980', 200);

    account.addMoney(2100, 'salary');
    account.addMoney(400, 'lottery');

    expect(account.getInfo())
      .toBe(`Name: Oleg, Age: 39, Amount: 2700$`);
  });

  it('Should withdraw money', () => {
    const account = new BankAccount('Oleg', '05.09.1956', 2000);

    account.withdrawMoney(600, 'new phone');
    account.withdrawMoney(700, 'products');

    expect(account.getInfo())
      .toBe(`Name: Oleg, Age: 63, Amount: 700$`);
  });

  it('Should update accountHistory', () => {
    const account = new BankAccount('Oleg', '05.09.1956', 1700);

    account.addMoney(2000, 'salary');
    account.withdrawMoney(500, 'new phone');

    const history = account.getAccountHistory();

    expect(history)
      .toHaveLength(3);

    expect(history[0])
      .toBe('Initial: 1700');

    expect(history[1])
      .toBe('salary: 2000');

    expect(history[2])
      .toBe('new phone: -500');
  });
});
