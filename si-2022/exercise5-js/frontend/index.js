
// console.log(1);

// const arr = [2, 3, 4];

// arr.forEach(el => {
//     console.log(el);
// });

// console.log(5);

const myBtn = document.getElementById('my-btn');

myBtn.addEventListener('click', (event) => {
    getUsers();
});

// console.log(7);

// setTimeout(() => {

//     console.log('five seconds later...');

//     setTimeout(() => {

//         console.log('ten seconds later...');

//     }, 5000);

// }, 5000);


function getUsers() {

    fetch('../backend/get-users.php')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
        
            const usersList = document.getElementById('users-list');

            data.forEach(user => {
                const userLi = document.createElement('li');
                userLi.innerText = user.name;

                usersList.appendChild(userLi);
            });

        });

}

const addUserForm = document.getElementById('add-user-form');

addUserForm.addEventListener('submit', (event) => {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    }

    fetch('../backend/save-user.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(msg => {
        console.log(msg);
    });

    event.preventDefault();
});
