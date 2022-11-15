
const form = document.getElementById('upload-file');

form.addEventListener('submit', (event) => {
    const file = document.getElementById('csv').files[0];

    const formData = new FormData();
    formData.append('csv', file);

    fetch('./save-data.php', {
        method: 'POST',
        // headers: { 'Content-Type': 'multipart/form-data' },
        body: formData 
    })
    .then(res => res.json())
    .then(data => console.log(data));

    event.preventDefault();
});
