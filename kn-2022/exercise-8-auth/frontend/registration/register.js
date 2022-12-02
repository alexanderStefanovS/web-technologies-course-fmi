
const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (event) => {

    const data = {};
    const fields = registrationForm.querySelectorAll('input');

    fields.forEach(field => {
        data[field.name] = field.value;
    });

    fetch("../../backend/api/register-user.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data));

    event.preventDefault();
});

