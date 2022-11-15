
//#region variables

var str = 'some string'; // string
var num = 123.34523; // number
var flag = true; // boolean
var nothing = null; // null
var undef; // undefined

// declaration of an object with object literal {}
var obj = {
    firstName: 'Sasho',
    age: 22
}

// declaration of an array with array literal []
var arr = [1, 'dog', true, null, 'cat'];

//#endregion

//#region conditional operators

// we use '===' to compare not only value but type of a variable
// same with '!=='

// falsy values - 0, false, NaN, '', null, undefined

var str1 = '123';
var num = 123;

if (str1 === num) {
    // console.log('equal');
} else {
    // console.log('not equal');
}

var isEqual = str1 === num ? 'yes' : 'no';

//#endregion

//#region loops

// iterating through object properties
for (var key in obj) {
    // console.log(key + ' - ' + obj[key]);
}

// iteratig through array elements 
for (var item of arr) {
    // console.log(item);
}


// standart for and while loops
for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

var j = 0;
while (j < arr.length) {
    // console.log(arr[j]);
    j++;
}

//#endregion

//#region functions

// function declaration

log('message 1');

function log(msg) {
    // console.log(msg);
}

log('message');

function sum(a, b) {
    return a + b;
}

log(sum(1, 5));

// function expression

// func('message 2')

var func = function(arg) {
    // console.log(arg);
}

func('some string');

// higer-order functions

function func1(arg1) {

    function func2(arg2) {
        // console.log(arg2);
    }

    func2(arg1);

}

func1('message');

function getOperation(type) {
    if (type === 'sum') {
        return function(a, b) {
            return a + b;
        }
    }  else {
        return function(a, b) {
            return a * b;
        }
    }
}

var myFunc = getOperation('asdaf');

// console.log(myFunc(4, 5));

var arr = [1, -43, 0, 5, 7];

function operation(oper, arr) {
    var newArr = [];
    for (var item of arr) {
        newArr.push(oper(item));
    }
    return newArr;
}

function multiplyBy10(el) {
    return el * 10;
}

var newArr = operation(multiplyBy10, arr);

// console.log(newArr);

// EcmaScript 2015 === ES6

// let person = {
//     firstName: 'Alexander',
//     age: 22
// };

// function func(a) {
//     a = null;
// }

// func(person);

// console.log(person);

//#endregion

//#region array

const myNumbers = [5, 6, -5, 0, 10, 9];

myNumbers.pop();
myNumbers.push(17);

myNumbers.splice(myNumbers.indexOf(-5), 1);

const filteredNumbers = myNumbers.filter(el => el > 5);

myNumbers.forEach(el => console.log(el));

const newArray = myNumbers.map(el => el * 10);
// console.log(newArray);

//#endregion

//#region element selection

// selection of html element by id
const header = document.getElementById('js-1');
// console.log(header);

// create html element and add inner text to it
const p = document.createElement('p');
p.innerText = 'some text';

// add element to the DOM as an element child
header.appendChild(p);

const article = document.getElementById('article-1');

// console.log(document.getElementsByTagName('p'));

const studentInput = document.getElementById('student');
const btn = document.getElementById('btn');
console.log(btn);

// handle button 'click' event
btn.addEventListener('click', (event) => {
    const studentName = studentInput.value;
    const el = document.createElement('h5');
    el.innerText = studentName;
    article.appendChild(el);
});

//#endregion
