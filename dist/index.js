"use strict";
//basic types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
//Array
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//tuple
let person = [1, 'Brad', true];
//tuple array
let employee;
employee = [
    [1, "elo"],
    [2, "eloooo"],
    [3, "eloooooo"]
];
//union
let pid;
pid = '22';
//enum (moze nie miec wartosci i defaultowo 0)
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 2] = "Up";
    direction1[direction1["Down"] = 3] = "Down";
    direction1[direction1["Left"] = 4] = "Left";
    direction1[direction1["Right"] = 5] = "Right";
})(direction1 || (direction1 = {}));
console.log(direction1.Left);
var direction2;
(function (direction2) {
    direction2["Up"] = "up";
    direction2["Down"] = "down";
    direction2["Left"] = "left";
    direction2["Right"] = "right";
})(direction2 || (direction2 = {}));
console.log(direction2.Left);
const user = {
    id: 1,
    name: "john"
};
//type Assertion
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
//function 
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 2));
//void 
function log(message) {
    console.log(message);
}
console.log("anything");
const user1 = {
    id: 1,
    name: "john"
};
//const addMath:MathFunc = (a,b)=> a+b
//const addMath = (a:number, b:number): number=> a+b
const addMath = (a, b) => a + b;
console.log(addMath(10, 20));
class Person {
    constructor(id, name) {
        /* console.log(1234) */
        this.id = id;
        this.name = name;
    }
    register(valueRegister) {
        return `${this.name} is now registered to ${valueRegister}`;
    }
}
const brad = new Person(1, "brad");
const mike = new Person(2, "mike");
console.log(brad.register("Olek"));
//subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register("hey"));
//generics ( placeholdery dla typów)
function getArray(items) {
    return new Array().concat(items);
}
let strArray = getArray(["elo", "elo", "elo"]);
let numberArray = getArray([1, 2, 3]);
