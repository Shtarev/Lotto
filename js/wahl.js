var kugelWahl = [];
var kolvo;
var spielenDarf = false;
function wahl(kugel) {
    for(var i = 1; i <= 6; i++) {
        if(kugelWahl[i] == undefined) {
            for(var count = i+1; count <= 6; count++) {
                if (kugel == kugelWahl[count]) {
                    wahlUndefined(count, kugel);
                    i = 7; count = 6;
                }
            }  
            if( i <= 6 ) {
                kugelWahl[i] = kugel;
                document.getElementById('taste'+kugel).style.backgroundImage = "url('images/x.jpg')";
                document.getElementById('taste'+kugel).style.fontWeight = "bold";
                i = 6;
            }
        }
        else if(kugelWahl[i] == kugel) {
            wahlUndefined(i, kugel);
            i = 6;
            }
    }
    var bleiben;
    if(kugelWahl.length > 6) {
        if(find(kugelWahl, undefined) == false) {
            spielenDarf = true;
            knopfAnzeigen(spielenDarf);
            document.getElementById('bleiben').innerHTML = "Feld ausge fülld!";
        }
        else {
            spielenDarf = false;
            knopfAnzeigen(spielenDarf); 
            document.getElementById('bleiben').innerHTML = "Ihr Spielfeld: Es bleibt noch "+kolvo+" Zahlen zu wählen";
        }
    }
    else {
        find(kugelWahl, undefined);
        bleiben = 7-kugelWahl.length+kolvo;
        spielenDarf = false;
        knopfAnzeigen(spielenDarf); 
        document.getElementById('bleiben').innerHTML = "Ihr Spielfeld: Es bleibt noch "+bleiben+" Zahlen zu wählen";
    }
}
function wahlUndefined(i, kugel) {
    kugelWahl[i] = undefined;
    document.getElementById('taste'+kugel).style.backgroundImage = "none";
    document.getElementById('taste'+kugel).style.fontWeight = "normal";
}
function find(array, value) {
    kolvo = 0;
    for (var key = 1; key < array.length; key++) {
        if (array[key] == undefined) {
            kolvo++;
        }
    }
    if(kolvo > 0) {
            return true;
        }
    else {
        return false;
    }
}