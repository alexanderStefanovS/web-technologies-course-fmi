
console.log(this);

function fn() {
    console.log(this);
}

const person = {
    age: 24,
    name: 'Sasho',

    getAge: function () {
        console.log(this);

        return this.age;
    }
};

function getAge() {
    return this.age;
}

getAge.call(person)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}
