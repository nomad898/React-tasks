class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get Name() {
        return this.name;
    } 

    toString() {
        console.log('Hello from User class');    
    }
}

export { User }