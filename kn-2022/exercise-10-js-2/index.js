
console.log(this);

debugger; 

function fn() {

    function fn2() {
        console.log(this);
    }

    fn2();
}

fn();

function getAge() {
    return this.age;
}

// const person = {
//     age: 24,
//     name: 'Sasho',
//     getName: function () {
//         console.log(this);

//         // function fn() {
//         //     console.log(this);
//         // }

//         // fn();

//         return this.name;
//     }
// }

// class Person {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getName() {
//         return this.name;
//     }

// }

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// getAge.call(person);

(function () {

    console.log('IIFE');

})();


