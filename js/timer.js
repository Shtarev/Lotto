var echtZeit = -1;
var timeoutID;
function testTimer(startTime) {
 var time = startTime;
 var min = parseInt(time / 60);
 if ( min < 1 ) {min = 0;}
    time = parseInt(time - min * 60);
 if ( min < 10 ) {min = '0'+min;}
 var seconds = time;
 if ( seconds < 10 ) {seconds = '0'+seconds;}
 echtZeit++;
 document.getElementById("time").innerHTML='Es ist noch: '+min+' Min. '+seconds+' Sek. bis zum Ende';
 startTime--;
 if ( startTime  >= 0 ) {
   timeoutID  =  setTimeout(function(){testTimer(startTime); }, 1000);
 } else {
   document.getElementById('time').innerHTML='Die Zeit ist um!';
   var zeitEnd = document.getElementById('zeitEnd');
   setTimeout(function(){
       var gewinnRang = findGewinn(kugelWahl, array6);
       if(gewinnRang == 0) {
           document.getElementById('nochMal').style.display = 'inline';
           zeitEnd.innerHTML ="Sie haben "+gewinnRang+" Ziffer gewinnen";
           }
       else {
           zeitEnd.innerHTML ="Sie haben "+gewinnRang+" Ziffer gewinnen";
           setTimeout(function(){
               findGewinn(kugelWahl, array6);
               document.getElementById('nochMal').style.display = 'inline';
               zeitEnd.innerHTML ="Sie haben "+gewinnRang+" Ziffer gewinnen<br>Ihre Glückszahlen für Heute";
           }, 2000);
       }
   }, 3000);

   clearTimeout(timeoutID);
 }
}
function findGewinn(arrayAuswahl, arrayGewinn) {
    var count = 0;
    var id;
    for(var i = 0; i <= arrayAuswahl.length; i++) {
        for (var key in arrayGewinn) {
            if (arrayGewinn[key] == arrayAuswahl[i]) {
                id = arrayGewinn[key];
                document.getElementById(id).style.color = "#800000";
                count++;
            }
        }
    }
    return count;
}