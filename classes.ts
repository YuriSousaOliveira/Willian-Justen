abstract class UserAccount {
    private name: string
    protected age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    logDetails(): void {
        console.log(`Name: ${this.name}. Age: ${this.age}`)
    }

    logCharDetails(): void {
        console.log(`CHAR DETAIL: ${this.name}`)
    }
}

class CharAccount extends UserAccount {
    readonly nickname: string
    public level: number

    get getLevel() {
        console.log("-----GET-----")
        return this.level
    }

    set setLevel(level: number) {
        this.level = level
    }

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age)
        this.nickname = nickname
        this.level = level
    }
}

//const yuri = new UserAccount("Yuri", 28)
//console.log(yuri)
//yuri.logCharDetails()
//yuri.logDetails()

const yurioh = new CharAccount("Yuri", 26, "YuriiOh", 26)
yurioh.setLevel = 555
console.log(yurioh)
console.log(yurioh.nickname)
yurioh.logDetails()

console.log(yurioh.getLevel)