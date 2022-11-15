
function loadUsers() {
    return fetch('http://localhost/web-technologies-si-2021/exercise12/backend/api/get-all-notes.php')
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw res.json();
            }
        });
        // .then(data => console.log(data))
        // .catch(err => {
        //     err.then(msg => console.log(msg))
        // });
}

async function checkUser() {
    try {
        await loadUsers();
    } catch(err) {
        const msg = await err;
        console.log(msg);
    }
}

(function() {

    checkUser();

})();