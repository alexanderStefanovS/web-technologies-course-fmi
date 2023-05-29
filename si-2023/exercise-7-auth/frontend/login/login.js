
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {

    const inputs = Array.from(loginForm.getElementsByTagName('input'));

    const loginData = {};
    inputs.forEach(input => {
        loginData[input.name] = input.value;
    });

    fetch('../../backend/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
    })
    .then((res) => {
        return res.json();
    })
    .then(data => {

    });

    event.preventDefault();
});

