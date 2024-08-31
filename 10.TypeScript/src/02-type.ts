let n: number = 10;
let str: string = "hello";
// 如果声明和赋值同时进行，则可以省略类型注解
let bool = true;

// 字面量
let gender: 'Male' | 'M' | true;    // 可以用 | 来连接多个类型（联合类型）

let a: any = 123;
a = '123';

let u: unknown = 123;
u = '123';

/* any 和 unknown 的区别 */
n = a;  // any 可以赋值给任意变量
// str = u;  => X  // unknown 只能赋值给 unknown
if (typeof u === 'string') {
    str = u;
}
// 类型断言
str = u as string;
str = <string>u;

function f(): void {
    return undefined;
}

function g(): never {
    throw new Error('error');
}

let o1: object = {
    name: 'Ignorant',
    age: 20,
}
o1 = f;

let o2: {
    name: string,
    age: number,
    gender?: 'M' | 'F',  // 可选属性
    [propName: string]: any,
}
o2 = {
    name: 'Ignorant',
    age: 20,
    gender: 'M',
    hobby: 'coding',
    address: {
        city: 'Nanjing',
        road: 'Hankou Road',
    }
}
// o2 = g; => X

let o3: (a: number, b: number) => number;
o3 = function (a, b) {
    return a + b;
}

// array
let arr1: string[] = ['a', 'b', 'c'];
let arr2: Array<number> = [1, 2, 3];

// tuple
let t: [string, string] = ['hello', 'abc'];

enum Gender {
    Male,
    Female,
}

type myType = 1 | 2 | 3 | 4 | 5;
let myVar: myType = 1;

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(123, 456));