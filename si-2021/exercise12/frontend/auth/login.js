
function getFormValue(form) {
    const formElements = Array.from(form.querySelectorAll('textarea, input, select'));

    return formElements.reduce((acc, el) => {
        acc[el.name] = el.value;
        return acc;
    }, {})
}

function login(loginData) {
    return fetch('http://localhost/web-technologies-si-2021/exercise12/backend/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
}

(function() {

    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        const loginData = getFormValue(loginForm);
        login(loginData);

        event.preventDefault();
    });

})();
