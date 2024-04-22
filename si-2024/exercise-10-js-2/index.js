
console.log(this);

function fn() {
    console.log(this);
}

function getAge() {
    return this.age;
}

const person = {
    name: 'Sasho',
    age: 25,
    getName: function () {
        return this.name;
    }
}

class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}

// (function() {

//     // const person = {
//     //     name: 'Sasho',
//     //     age: 25,
//     //     getName: function () {
//     //         return this.name;
//     //     }
//     // }

//     // console.log(person.getName());

// })();
