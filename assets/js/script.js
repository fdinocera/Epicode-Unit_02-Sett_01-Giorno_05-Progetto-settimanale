
//globali html
let testata = document.getElementById('testata');
let getStarted = document.getElementById('getStarted');


addEventListener('scroll', (e) => {

    if (window.scrollY >= 420) {

        //TESTATA BIANCA
        testata.style.backgroundColor = "white";

        //PULSANTE VERDE
        // getStarted.style.backgroundColor = rgb(21, 109, 18);   
        getStarted.style.backgroundColor = rgb(255, 0, 0);


    } else {
        //TESTATA GIALLA
        testata.style.backgroundColor = rgb(255, 192, 23);

        //PULSANTE NERO
        getStarted.style.backgroundColor = rgb(19, 19, 19);
    }
});