var array6 = [];
function gewinnzahlen() {
    var array36 = [];
    for(var i = 0; i <= 36; i++) {
        array36[i] = i;
    }
    array36.shift();
    for(var i = 1; i <= 6; i++) {
        shuffle(array36);
        array6['gewinn'+i] = array36.pop();
    }
}
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
return array;
}