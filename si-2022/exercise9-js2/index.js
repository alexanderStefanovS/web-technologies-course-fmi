
//#region this and classes

function getName() {
    return this.name;
}

const person = {
    name: 'Sasho',
    age: 23
}

const getPersonName = getName.bind(person);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}

class Student extends Person {
    constructor(name, age, fn) {
        super(name, age);
        this.fn = fn;
    }

    getFN() {
        return this.fn;
    }
}

const person2 = new Person('Sasho', 23);
const student = new Student('Sasho', 23, 11111);

//#endregion

//#region fetch API + Promise

console.log('before');

fetch('./example3.php')
    .then(res => res.text())
    .then(data => console.log(data));

fetch('./example.php')
    .then((response) => {
        return response.text();
    })
    .then((url) => {
        console.log(url);
        return fetch(url);
    })
    .then(res2 => res2.text())
    .then(data => console.log(data));


Promise.all([fetch('example.php'), fetch('example3.php')])
    .then(responses => {
        return Promise.all(responses.map(r => r.text()))
    })
    .then(data => console.log(data));

console.log('after');

const promis = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello World');
    }, 2000);
});

promis.then(data => console.log(data));

//#endregion

//#region import 

import { Person } from './person.js';

const person3 = new Person('Sasho', 23);

console.log(person);

//#endregion