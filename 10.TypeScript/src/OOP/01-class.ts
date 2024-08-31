class Person {
    protected name: string;
    protected age: number;
    static readonly id: number = 1001;   // readonly: 只读属性

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): void {
        console.log("Hello!");
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    setName(name: string): void {
        this.name = name;
    }

    setAge(age: number): void {
        this.age = age;
    }

}

// inheritance
class Student extends Person {
    grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    study(): void {
        console.log("I am studying...");
    }

    sayHello() {
        console.log("Hi, I am " + this.name + " !");
    }
}

const p = new Person("Ignorant", 20);
console.log(p);
console.log(Person.id);
p.sayHello();

const stu = new Student("John", 18, 96.5);