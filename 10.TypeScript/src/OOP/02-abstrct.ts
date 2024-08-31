abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract sayHello(): void;
}

class Dog extends Animal {
    sayHello() {
        console.log("woof woof...");
    }
}

class Cat extends Animal {
    sayHello() {
        console.log("meow meow...");
    }
}