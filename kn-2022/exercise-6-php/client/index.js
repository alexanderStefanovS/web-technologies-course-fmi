
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    const person = {
        name: 'Sasho',
        age: 23
    }

    fetch("../server/api.php?param=test", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person) 
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });

});
