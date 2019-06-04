# Classy Bank Account
GH-Pages https://sherjlok15.github.io/js_classy_bank_account/

Create a **class** for working with bank account data of a person.

**Requirements:**

- The person has the following initial info: name, date of birth in string format, initial amount of money.
- We can do the following options with person:

    `getInfo` - print into console info about the current person

    `addMoney` - plus money to his bank account and some info about transaction

    `withdrawMoney` - minus money from his account and some info about transaction

    `getAccountHistory` - print into console the history of managing his account

- Use `this` to describe these methods.


```js
const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$
```

**Tips:**

- How to find a person's age:
    - [https://stackoverflow.com/a/24181701/4449154](https://stackoverflow.com/a/24181701/4449154)
    - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Examples)
    - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
