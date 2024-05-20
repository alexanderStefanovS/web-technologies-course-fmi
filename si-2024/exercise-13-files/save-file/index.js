const form = document.getElementById('upload-file');

form.addEventListener('submit', (event) => {
    const file = document.getElementById('csv').files[0];

    const formData = new FormData();
    formData.append('csv', file);

    fetch('./save-file.php', {
        method: 'POST',
        body: formData 
    });

    event.preventDefault();
});