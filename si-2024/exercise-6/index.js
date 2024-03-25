
const regForm = document.getElementById('reg-form');

regForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {};

    const formElements = Array.from(document.querySelectorAll('.form-item input, select'));
    formElements.forEach(element => {
        data[element.name] = element.value;
    });

    console.log(data);

});

