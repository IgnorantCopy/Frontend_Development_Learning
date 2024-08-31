"use strict";
let n = 10;
let str = "hello";
let bool = true;
let gender;
let a = 123;
a = '123';
let u = 123;
u = '123';
n = a;
if (typeof u === 'string') {
    str = u;
}
str = u;
str = u;
function f() {
    return undefined;
}
function g() {
    throw new Error('error');
}
let o1 = {
    name: 'Ignorant',
    age: 20,
};
o1 = f;
let o2;
o2 = {
    name: 'Ignorant',
    age: 20,
    gender: 'M',
    hobby: 'coding',
    address: {
        city: 'Nanjing',
        road: 'Hankou Road',
    }
};
let o3;
o3 = function (a, b) {
    return a + b;
};
let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let t = ['hello', 'abc'];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let myVar = 1;
function add(a, b) {
    return a + b;
}
console.log(add(123, 456));
