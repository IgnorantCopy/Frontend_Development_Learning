interface MyInterface {
    name: string;
    age: number;

    sayHello(): void;
}

const o: MyInterface = {
    name: "Ignorant",
    age: 20,
    sayHello() {
        console.log("Hello, my name is " + this.name);
    }
}

class Teacher implements MyInterface {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): void {
        console.log("Hello, my name is " + this.name);
    }
}