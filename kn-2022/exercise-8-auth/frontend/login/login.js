
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {

    const data = {};
    const fields = loginForm.querySelectorAll('input');

    fields.forEach(field => {
        data[field.name] = field.value;
    });

    fetch("../../backend/api/login.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        location = '../products/products.html';
    });

    event.preventDefault();
});

