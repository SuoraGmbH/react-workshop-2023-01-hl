export class User2 {
    public length: number

    constructor(length: number) {
        this.length = length
    }
}

function sayHello(user: User2) {
    return `Hello tall user, you are ${user.length} tall!`
}

sayHello("David")
