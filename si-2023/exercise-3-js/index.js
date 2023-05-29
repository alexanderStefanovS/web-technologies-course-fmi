
const str = "some string";
const str2 = 'some string 2';
const str3 = `some string 3 ${str}`;

const person = {
    name: 'Sasho',
    age: 24
}

person.name;
person['name'];


person.fn = '11111';
person['fn'] = '11111';

const arr = [ "some string", 23, person, true ];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

function fn() {
    console.log('fn');
}

// fn();

const fnExpression = function(a, b) {
    return a + b;
}

const fnArrow = (a, b) => {
    return a + b;
}

function excuteOperation(a, b, oper) {
    return oper(a, b);
}

function getOperator(symbol) {

    if (symbol === '*') {
        return multiply;
    } else {
        return add; 
    }


}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// console.log(excuteOperation(4, 5, multiply));

// arr.forEach();

if (true) {

    var a = 5;

}

arr.forEach((elem, index) => {
    // console.log(elem);
});

// console.log(a);

const h1 = document.getElementById('heading');
//console.log(h1.innerText);

const h1Elements = Array.from(document.getElementsByTagName('h1'));

function forEach(arr, oper) {
    for (let i = 0; i < arr.length; i++) {
        oper(arr[i]);
    }
}

forEach(h1Elements, (elem) => { console.log(elem.innerText) });

h1Elements.forEach((elem) => {
    //console.log(elem.innerText);
});

const texts = h1Elements.map(elem => elem.innerText);
//console.log(texts);

// const box = document.getElementById('box');

// const button = document.createElement('button');
// button.innerText = 'Click me!';

// box.appendChild(button);

// const ul = document.getElementById('list');
// box.removeChild(ul);

// box.innerHTML = "<h1> Hello inner element </h1>";

const clickButton = document.getElementById('click-btn');

clickButton.addEventListener('click', () => {
    console.log("I'm clicked!");
});

const myForm = document.getElementById('my-form');

myForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const username = document.getElementById('username').value;

    const inputs = myForm.querySelectorAll('input, select');

    const data = {};
    inputs.forEach(input => {
        data[input.name] = input.value;
    });

    console.log(data);

}); 

