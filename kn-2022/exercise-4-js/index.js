
// console.log('before');

// setTimeout(() => {

//     setTimeout(() => {
//         console.log('more 5 seconds...');
//     }, 5000);
    
//     console.log('5 seconds later...');

// }, 5000);

// console.log('after');

// function returnAfterFiveSeconds(value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('Error');
//         }, 5000);
//     });
// }


// const users = [
//     { name: 'User 1'},
//     { name: 'User 2'},
// ]

// returnAfterFiveSeconds(users)
//     .then((result) => {
//         console.log(result);
//         return returnAfterFiveSeconds('data');
//     })
//     .catch(error => {
//         console.log(error);
//     });


// promise.then((result) => {
//     console.log(result);
// });

const button = document.getElementById('load-users');

button.addEventListener('click', () => {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.json();
        })
        .then((users) => {
            console.log(users);
            users.forEach(user => {
                const userEl = document.createElement('p');
                userEl.innerText = user.name; 
                document.body.appendChild(userEl);
            })
        });

});

const addTodoButton = document.getElementById('add-todo');

addTodoButton.addEventListener('click', () => {

    const todo = {
        userId: 1,
        title: 'some title',
        completed: true
    }

    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then(result => console.log(result));

});


const log = document.getElementById('log');
const input = document.querySelector('input');

input.addEventListener('keypress', (event) => {
    console.log(event);
});




