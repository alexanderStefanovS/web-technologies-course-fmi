
const countH1 = document.getElementById('count');

fetch('sessions.php')
    .then(res => res.text())
    .then(count => {
        countH1.innerHTML = count;
    });

