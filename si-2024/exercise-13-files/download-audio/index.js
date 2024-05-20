
(() => {

    const btn = document.getElementById('download');

    btn.addEventListener('click', () => {

        fetch("download-audio.php")
            .then(res =>  res.blob())
            .then(blob => {
                const blobUrl = URL.createObjectURL(blob);
 
                const audio = new Audio();
                audio.src = blobUrl;

                // If you want to just play it immediately 
                audio.play();

                // If you want to append audio element to the document
                // audio.controls = true;
                // document.body.appendChild(audio);
            });

    });

})();
