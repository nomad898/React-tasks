class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get Name() {
        return this.name;
    } 

    toConsole() {
        console.log('Hello from User class');    
    }
}

export { User }