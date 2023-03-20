 
// setTimeout(() => {
//     console.log('Five seconds later...');

//     setTimeout(() => {
//         console.log('Ten seconds later...');

//     }, 5000);

// }, 5000);

// setTimeout(() => {
//     console.log('? second later...');
// }, 4000);

const person = {
    name: 'Sasho',
    age: 24
};

// console.log(JSON.stringify(person));


function executeAfterFiveSeconds(number) {
    return new Promise((resoleve, reject) => {
        setTimeout(() => {
            resoleve(number);
        }, 5000);
    });
}

// const promise = executeAfterFiveSeconds(10);

// promise
//     .then((value) => {
//         console.log(value);

//         return executeAfterFiveSeconds(15);
//     })
//     .then((value) => {
//         console.log(value);
//     });

const list = document.getElementById('todos-list');

fetch('./todos.php')
    .then(response => {
        return response.json();
    })
    .then(todos => {
        
        todos.forEach(todo => {
            const todoListItem = document.createElement('li');
            todoListItem.innerText = todo.title;
            list.appendChild(todoListItem);
        });


    });

const todo = {
    title: 'asdfasdfasdf',
    userId: 1,
    completed: false,
}

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });


