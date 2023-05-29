
const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (event) => {

    const inputs = registrationForm.querySelectorAll('input');

    const userData = {};
    inputs.forEach(input => {
        userData[input.name] = input.value;
    });

    fetch('../../backend/api/registration.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then((httpData) => {
        if (httpData.ok) {
            return httpData.json();
        }

        return httpData.json().then(error => {
            throw {error, url: httpData.url};
        });
    })
    .then((data) => {
        return fetch(`../get-more-data?smth=${data.smth}`);
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        }


    })
    .then((data) => {

    })
    .catch((error) => {
        console.log(error);
    });

    event.preventDefault();
});
