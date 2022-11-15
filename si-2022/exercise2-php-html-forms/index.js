
const noteForm = document.getElementById('note-form');

noteForm.addEventListener('submit', (event) => {

    const fields = noteForm.querySelectorAll('input, textarea, select');
    
    console.log(fields);
    
    const data = {};
    fields.forEach(field => {
        data[field.name] = field.value;
    });  

    console.log(data);

    event.preventDefault();
});