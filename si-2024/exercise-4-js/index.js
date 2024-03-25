
const saveButton = document.getElementById('save-btn');

saveButton.addEventListener('click', () => {
    const todo = {
        id: 1,
        name: 'Иди на упражнение',
    }

    fetch('./save-todo.php', {
        method: 'POST',   
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.message);
    });
});

const button = document.getElementById('my-btn');

// console.log('before');

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Retrieve data from the form inputs
    // Create data object
    // Send POST HTTP query to the php server
    // Process the response from the HTTP query -> create element

});

button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.json();
        })
        .then((users) => {
            return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${users[0].id}`);
        })
        .then(res => {
            return res.json();
        })
        .then(todos => {
            console.log(todos);
        });
});

function executeTimeout(seconds) {
    setTimeout(() => {
        console.log(`after ${seconds} seconds...`);

        setTimeout(() => {
            console.log(`after 1 + ${seconds} more second`);
        }, 1000);

    }, seconds * 1000);
}

// console.log('after');

// console.log('before');

// executeTimeout(5);
// executeTimeout(4);

// console.log('after');



