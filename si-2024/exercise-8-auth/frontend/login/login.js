
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = Array.from(document.querySelectorAll('label input'));

    const userData = {};
    inputs.forEach(input => {
        userData[input.name] = input.value;
    });

    fetch('../../backend/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then((res) => {
            if (!res.ok) {
                throw res.json();
            }

            return res.json(); 
        })
        .then((data) => {
            location = '../notes/notes.html';
        })
        .catch((err) => {
            err.then(errData => {
                console.error(errData);

                // show error message on the page
            })
        });

});
