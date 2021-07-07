class BankAccount {
  constructor() {
    this.name = name;
    this.date = date;
    this.amount = amount;
    this.age = this._getAge(date);
    this.history = [{ Initial: this.amount }];
  }

  _getAge(dateOfBirth) {
    const dateArr = dateOfBirth.split('.');
    const year = dateArr[2];
    const month = dateArr[1];
    const day = dateArr[0];
    const yearNow = new Date().getFullYear();
    const monthNow = new Date().getMonth() + 1;
    const dayNow = new Date().getDate();
    return (monthNow === month && dayNow < day || monthNow < month) ?
      yearNow - year - 1 : yearNow - year;
  };

  getInfo() {
    return `Person name: ${this.name}, age: ${this.age}, money amount: ${this.amount}$`;
  };

  amountChange(amount, operationInfo) {
    this.amount += amount;
    this.history.push({ [operationInfo]: amount });
  };

  addMoney(amount, operationInfo) {
    this._amountChange(amount, operationInfo);
  };

  withdrawMoney(amount, operationInfo) {
    this._amountChange(-amount, operationInfo);
  };

  getAccountHistory() {
    const history = [];

    for (let key of this.history) {
      for (let operation in key) {
        history.push(`${operation}: ${key[operation]}`);
      };
    };

    return history;
  };
}