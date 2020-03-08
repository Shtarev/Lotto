var intervalIdStart;
function start() {
    document.getElementById('auswahl').style.display = 'inline';
    document.getElementById('bleiben').style.display = 'none';
    document.getElementById('time').style.display = 'inline';
    auswahlPosition();
    knopfAnzeigen(false);
    gewinnzahlen();
    testTimer(150);
    var audio = new Audio('http://www.shtarev.com/beispiele/lotto/audio/popcorn.mp3'); 
    audio.autoplay = true; 
    intervalIdStart = setInterval(xyNew, 3100);
}