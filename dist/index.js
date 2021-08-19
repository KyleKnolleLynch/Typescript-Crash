"use strict";
//  Primitives
let id = 5;
let company = "Kyle's Business";
let isPublished = false;
let x = 'Hello';
let age;
//  Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
//  Tuple
let person = [5, 'Sarah', true];
//  Tuple array
let employee;
employee = [
    [1, 'John'],
    [2, 'Ellen'],
    [3, 'Richard']
];
//  Union
let pid;
pid = '5';
pid = 6;
//  Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Sarah'
};
//  Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
customerId = 8;
//  Functions 
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Ellen'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//  Classes
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const korl = new Person(1, 'korl');
const mike = new Person(2, 'mike');
//  Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(3, 'Richard', 'Developer');
//  Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'Frank', 'C3PO']);
numArray.push(5);
