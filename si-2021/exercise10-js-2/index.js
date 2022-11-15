
var b = 2;
c = 3;

function f1() {

    d = 4;

    debugger

    var a = 1;

    if (true) {
        const e = 5;
    }

    function f2() {
        console.log(a);
    }

    f2();

}

// f1();

// function multiplyBy(multy) {
//     return function(num) {
//         return num * multy;
//     }
// }

// const op = multiplyBy(5);

// console.log(op(3));

// const obj = {
//     firstName: 'Sasho',
//     age: 22,
//     getAge: function() {

//         debugger

//         return this.age;
//     }
// }

// obj.getAge();

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age;
    }

}

const person = new Person('Sasho', 22);

function sayHello() {
    return `Hello, my name is ${this.name}`;
}

const hello = sayHello.call(person);

class Animal {
    constructor(age) {
        this.age = age;

        this.getAge = Person.prototype.getAge.bind(this);
    }
}

const dog = new Animal(7);

// Types and inheritance in ES5 

function Parent(prop1) {
    this.prop1 = prop1;
}

function Child(prop1, prop2) {
    Parent.call(this, prop1);
    this.prop2 = prop2;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// > ES6 way

class Parent {
    constructor(prop1) {
        this.prop1 = prop1;
    }
}

class Child extends Parent {
    constructor(prop1, prop2) {
        super(prop1);
        this.prop2 = prop2;
    }
}
