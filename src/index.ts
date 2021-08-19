//  Primitives
let id: number = 5
let company: string = "Kyle's Business"
let isPublished: boolean = false
let x: any = 'Hello'
let age: number

//  Arrays
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'hello']

//  Tuple
let person: [number, string, boolean] = [5, 'Sarah', true]

//  Tuple array
let employee: [number, string][]

employee = [
    [1, 'John'],
    [2, 'Ellen'],
    [3, 'Richard']
]


//  Union
let pid: string | number
pid = '5'
pid = 6

//  Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//  Objects

//  Types
//  works with primitives or unions
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Sarah'
}

//  Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

customerId = 8


//  Functions 
function addNum(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}

//  Interfaces
//  won't work with primitives or unions
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Ellen'
}


interface MathFunc {
    (x: number, y: number): number 
}

const add: MathFunc = (x: number, y: number): number => x + y 
const sub: MathFunc = (x: number, y: number): number => x - y


interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

//  Classes
class Person implements PersonInterface {
    id: number
    name: string


    constructor(id: number, name: string) {
        this.id = id,
        this.name = name
    }

    register() {
        return `${this.name} is registered`
    }
}

const korl = new Person(1, 'korl')
const mike = new Person(2, 'mike')


//  Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp1 = new Employee(3, 'Richard', 'Developer')


//  Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}


let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Brad', 'Frank', 'C3PO'])

numArray.push(5)

