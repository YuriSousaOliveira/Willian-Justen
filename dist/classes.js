"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`Name: ${this.name}. Age: ${this.age}`);
    }
    logCharDetails() {
        console.log(`CHAR DETAIL: ${this.name}`);
    }
}
class CharAccount extends UserAccount {
    get getLevel() {
        console.log("-----GET-----");
        return this.level;
    }
    set setLevel(level) {
        this.level = level;
    }
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
}
//const yuri = new UserAccount("Yuri", 28)
//console.log(yuri)
//yuri.logCharDetails()
//yuri.logDetails()
const yurioh = new CharAccount("Yuri", 26, "YuriiOh", 26);
yurioh.setLevel = 555;
console.log(yurioh);
console.log(yurioh.nickname);
yurioh.logDetails();
console.log(yurioh.getLevel);
