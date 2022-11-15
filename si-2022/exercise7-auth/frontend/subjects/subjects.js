
(() => {

    fetch('../../backend/api/get-user-subjects.php')
        .then(res => {

            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    // The access is forbidden. Open home page.
                } else if (res.status === 500) {
                    // Backend error. Display the correct message.
                }
            }
            
            return res.json();
        })
        .then(data => {
            console.log(data);
        });

})();
