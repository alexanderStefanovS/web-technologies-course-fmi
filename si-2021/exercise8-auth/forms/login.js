(function() {

const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    const data = {
        email,
        password
    }

    fetch('../api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => console.log(data));

    event.preventDefault();
})


})();