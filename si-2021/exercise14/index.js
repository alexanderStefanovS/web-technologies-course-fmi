
(function() {

    fetch('./download-img.php')
        .then((res) => res.blob())
        .then((blob) => {
            const url = URL.createObjectURL(blob);

            const img = document.createElement('img');
            img.setAttribute('src', url);

            document.body.appendChild(img);

            // const a = document.createElement('a');
            // a.style.display = 'none';
            // a.href = url;
            // a.download = 'cat.jpg';
            // document.body.appendChild(a);
            // a.click();

            // URL.revokeObjectURL(url);
        });

})();
