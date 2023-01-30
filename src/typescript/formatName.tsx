interface UserInterface {
    firstName: string;
    lastName: string
}

function formatName(user: UserInterface) {
    return `${user.firstName} ${user.lastName}`;
}

class User {
    public firstName: string
    public lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const userAsObject = {
    firstName: 'Miriam',
    lastName: 'Janssen',
};

const element = <h1>👋, {formatName(userAsObject)}!</h1>;
const element2 = <h1>👋, {formatName(new User('Derek', 'Buck'))}!</h1>;
