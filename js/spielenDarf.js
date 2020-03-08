function knopfAnzeigen(activPassiv) {
    if (activPassiv == false) {
        document.getElementById('button').style.display = 'none';
    }
    else {
        document.getElementById('button').style.display = 'inline-block';
    }
}
function auswahlPosition() {
    kugelWahl.sort(function( a, b ) {return a - b});
    var i = 0;
    kugelWahl.forEach(function(value, i) {
		i++;
        var auswahl = document.getElementById('auswahl');
        var varName = "auswahl"+i;
        window[varName] = document.createElement('div');
        auswahl.appendChild(window[varName]);
        window[varName].innerHTML = value;
        window[varName].id = 'auswahl'+i;
        document.getElementById('auswahl'+i).className = 'taste';
        document.getElementById('auswahl'+i).style.cursor = 'default';
        document.getElementById('auswahl'+i).style.backgroundColor = "bisque";
        document.getElementById('taste'+value).style.backgroundImage = "none";
        document.getElementById('taste'+value).style.fontWeight = "normal";
    });
    document.getElementById('box').style.zIndex = 3;
}