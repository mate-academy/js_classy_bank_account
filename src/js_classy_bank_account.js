class Person {
  constructor(name, date, money) {
    this.name = name;
    this.date = date
      .split(".")
      .reverse()
      .join("/");
    this.money = money;
    this.log = [
      { name: "Initial:", value: "1000" },
      { name: "new phone:", value: "-500" },
      { name: "apartment rent:", value: "-500" }
    ];
  }

  _getAge = function() {
    let birthdate = new Date(this.date);
    let cur = new Date();
    let diff = cur - birthdate;
    return Math.floor(diff / 31557600000);
  };

  getInfo = function() {
    return (
      `Name: ${this.name}, Age: ${this._getAge()}, Amount: ${this.money}$`
    );
  };

  addLog = function (sum, add) {
    this.log.push({ name: `${add}:`, value: `${sum}` });
  };

  addMoney = function(sum, add) {
    this.money += sum;
    this.addLog(sum, add)
  };

  getAccountHistory = function() {
    let history = [];
    this.log.map((element, i) => {
      history[i] = element.name + " " + element.value;
    });
    return history;
  };

  withdrawMoney = function(sum, add) {
    this.money -= sum;
    this.addLog('-' + sum, add)
  };
}