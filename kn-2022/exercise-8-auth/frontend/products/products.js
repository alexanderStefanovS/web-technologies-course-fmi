
fetch('../../backend/api/products.php')
    .then(res => {
        console.log(res);

        // if (res.status === 401) {
        //     location = '../login/login.html';
        // }

        if (res.ok) {
            return res.json();
        }

        

        res.json().then(error => {

            console.log(error);

            throw error;
        })
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
