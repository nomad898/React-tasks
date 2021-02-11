export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get Name() {
        return this.name;
    }

    async start() {
        await Promise.resolve('async is working')
    }

    toString() {
        console.log('Hello from User class');    
    }
}