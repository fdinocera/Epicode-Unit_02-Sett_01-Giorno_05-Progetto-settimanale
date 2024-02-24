
//globali html
const testata = document.getElementById('testata');
const getStarted = document.getElementById('getStarted');
// const ftFooter = document.getElementById('ftFooter');



addEventListener('scroll', (e) => {

    if (window.scrollY >= 420) {
        //TESTATA BIANCA
        testata.style.backgroundColor = 'rgb(255, 255, 255)';

        //PULSANTE VERDE        
        getStarted.style.backgroundColor = 'rgb(21, 109, 18)';

        //animazione testata
        getStarted.style.animation = 'fadeInAnimation';
        getStarted.style.animationDuration = '3s';
    } else {
        //TESTATA GIALLA
        testata.style.backgroundColor = 'rgb(255, 192, 23)';

        //PULSANTE NERO
        getStarted.style.backgroundColor = 'rgb(19, 19, 19)';

        //animazione testata
        getStarted.style.animation = 'fadeInAnimation';
        getStarted.style.animationDuration = '3s';
        getStarted.style.animationDirection = 'reverse';
    }
});