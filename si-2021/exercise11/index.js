
function loadUsers() {
    // return fetch('http://localhost/web-technologies-si-2021/exercise11/get-users.php')
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
}

function loadTodosByUserId(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
}

function deleteUserById() {
    fetch(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}`, {
        method: 'DELETE' 
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function saveUserTodo(title) {

    const todo = {
        userId: selectedUser.id,
        title, 
        completed: false
    }

    fetch('http://localhost/web-technologies-si-2021/exercise11/save-todo.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
}

function renderTodos(todos) {
    const userTodosList = document.getElementById('user-todos');
    userTodosList.innerHTML = null;

    todos.forEach((todo) => {
        const todoLi = document.createElement('li');
        todoLi.innerText = todo.title;

        userTodosList.appendChild(todoLi);
    });
}

function onUserClick(user) {
    const userLi = document.getElementById(user.id);

    userLi.addEventListener('click', () => {

        selectedUser = user;
        showUser();

        loadTodosByUserId(user.id)
            .then((todos) => {
                renderTodos(todos);
            });
    });
}

function renderUsers(users) {
    const usersList = document.getElementById('users');
    usersList.innerHTML = null;

    users.forEach(user => {
        const userLi = document.createElement('li');
        userLi.innerHTML = `<span id="${user.id}">${user.name}, ${user.email}</span>`;
        usersList.appendChild(userLi);

        onUserClick(user);
    });
}

function showUser() {
    const selectedUserEl = document.getElementById('selected-user');
    selectedUserEl.innerText = `${selectedUser.name}, id: ${selectedUser.id}`;
}

let selectedUser = null;

(function() {

    const loadUsersBtn = document.getElementById('load-users');

    loadUsersBtn.addEventListener('click', () => {
        loadUsers()
            .then((users) => {
                // console.log(users);
                renderUsers(users);
            });
    });

    const delBtn = document.getElementById('del-user');

    delBtn.addEventListener('click', () => {
        if (selectedUser) {
            deleteUserById();
        }
    });

    const addTodoForm = document.getElementById('add-todo');

    addTodoForm.addEventListener('submit', (event) => {

        const title = document.getElementById('title').value;
        if (selectedUser) {
            saveUserTodo(title);
        }

        event.preventDefault();
    });

})();

