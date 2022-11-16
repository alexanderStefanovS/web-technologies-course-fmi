console.log('Hello JS!');

if (true) {
    let num = 5;
}


const person = {
    name: 'Pesho',
    age: 31,
}

person.name = 'Sasho';

// console.log(person);

const arr = [ 1, true, 'smth' ];

arr[0] = 'test';

function testFn() {
    return 'test';
}

const fn1 = function (arg1, arg2) {
    return 'test 2';
}

const fn2 = (arg1) => {
    return arg1 + 1;
}

// arr.forEach((value) => {
//     console.log(value);
// });

// for(const key in person) {
//     console.log(person[key]);
// }

// for (const el of arr) {
//     console.log(el);
// }

const h1Element = document.getElementById('heading');

h1Element.innerText = 'Hello World';

const inputName = document.getElementById('name');
inputName.value = 'Sasho';

const headings = document.getElementsByTagName('h1');

const p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus enim veniam quibusdam odio sint esse molestiae, nisi facere dicta voluptas. Itaque porro veniam magni. Voluptatum, sit? Quam iusto quisquam voluptatibus.';

const header = document.getElementsByTagName('header')[0];

// const btn = document.getElementById('add-btn');

// btn.addEventListener('click', (event) => {
//     console.log(event);
//     header.appendChild(p);
// });

const form = document.getElementById('my-form');

form.addEventListener('submit', (event) => {

    debugger;

    const formValue = {
        name: 'Sasho'
    };


    inputs = [{name: 'email', value: 'a@a.bg'}, {name: 'password', value: '1111'}];

    formValue[inputs[0].name] = inputs[0].value;

    const inputs = Array.from(document.querySelectorAll('div input'));

    inputs.forEach((input) => {
        formValue[input.name] = input.value;
    });

    console.log(formValue);

    console.log('form is submitted');

    event.preventDefault();
});




