
fetch('../../backend/api/notes.php')
    .then(res => {
        if (!res.ok) {

            if (res.status === 401) {
                location = '../login/login.html';
            }

            throw res.json();
 
        }

        return res.json();
    })
    .then(notes => {
        // data processing
    })
    .catch(err => {
        // err handling
    });

