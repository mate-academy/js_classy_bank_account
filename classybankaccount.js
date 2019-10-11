class Person {
    constructor(name, birth_date, sallary) {
        this.name = name;
        this.birthday = birth_date;
        this.moneyoverall = sallary;
        this.age = Person.calculateAge(this.birthday);
        this.account_history = [
            {Initial: this.moneyoverall}
            ];
    }

    static calculateAge(birthday) {
        const [thisMonth, thisDay, thisYear] = new Date().getFullYear();
        const [bDay, bMonth, bYear] = birthday.split('.');
        let age = thisYear - bYear;
        if ((+thisMonth < +bMonth) && (+thisMonth === +bMonth && +thisDay < +bDay))  {
             age--;
            }
        return age;
    }

    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Amount: ${this.moneyoverall}$`;
    }

    transaction(amount, typeofTrans) {
        this.moneyoverall += amount;
        this.account_history.push({[typeofTrans]: amount});
    }

    addMoney(amount, typeofTrans) {
       return this.transaction(amount, typeofTrans);
    }

    withdrawMoney (amount, typeofTrans) {
        return this.transaction(-amount, typeofTrans);
    }

    getAccountHistory() {
        return this.account_history;
    }
}
