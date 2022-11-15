
function arePasswordsEqual(password, rePassword) {
    if (password !== rePassword) {
        const errMsgEL = document.getElementById('err-msg');
        errMsgEL.innerText = 'Паролите не съвпадат'; 

        return false;
    }

    return true;
}

function registration(userData) {
    fetch('../../../backend/api/registration.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return res.json().then(err => {
                throw new Error(err.message);
            });
        }
    })
    .then(data => {
        const successMsgEL = document.getElementById('success-msg');
        successMsgEL.innerText = `${data.message}. Към `;
        const loginLink = document.createElement('a');
        loginLink.innerText = 'ВХОД';
        loginLink.setAttribute('href', '../login/login.html');
        successMsgEL.appendChild(loginLink);
    })
    .catch(err => {
        const errMsgEL = document.getElementById('err-msg');
        errMsgEL.innerText = err.message;
    });
}

(() => {

    const registrationForm = document.getElementById('reg-form');

    registrationForm.addEventListener('submit', (event) => {
        const errMsgEL = document.getElementById('err-msg');
        errMsgEL.innerText = null;

        const successMsgEL = document.getElementById('success-msg');
        successMsgEL.innerText = null;

        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
        const rePassword = document.getElementById('re-pass').value;

        if (arePasswordsEqual(password, rePassword)) {
            registration({email, password});
        }

        event.preventDefault();
    });

})();
