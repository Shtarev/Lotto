var xyBox = box.getBoundingClientRect();
var site;
var gewinnAus = 0;
var durchmesser = parseInt(getComputedStyle(document.getElementById(1)).width);
function xyNew(){
    var count = 0;
    if (gewinnAus < 48) {
        var intervalId = setInterval(function() {
            count++;
            if(count == 36){
                clearInterval(intervalId);
            }
            setXyNew(count);
        }, 83);
    gewinnAus++;
    }
    else {
            var intervalIdEnd = setInterval(function() {
            count++;
            setXyNew(count);
            if(count == 36){
                clearInterval(intervalIdStart);
                clearInterval(intervalIdEnd);
            }
        }, 83);
    }
}
function setXyNew(id){
    xyBox = box.getBoundingClientRect();
    if (gewinnAus == 26) {
        document.getElementById(array6["gewinn1"]).name = "gewinn1";
    }
    if (gewinnAus == 30) {
        document.getElementById(array6["gewinn2"]).name = "gewinn2";
    }
    if (gewinnAus == 34) {
        document.getElementById(array6["gewinn3"]).name = "gewinn3";
    }
    if (gewinnAus == 38) {
        document.getElementById(array6["gewinn4"]).name = "gewinn4";
    }
    if (gewinnAus == 42) {
        document.getElementById(array6["gewinn5"]).name = "gewinn5";
    }
    if (gewinnAus == 46) {
        document.getElementById(array6["gewinn6"]).name = "gewinn6";
    }
    var kugelId = document.getElementById(id);
    var xyKugel = kugelId.getBoundingClientRect();
    if(kugelId.name == "gewinn1") {
        if(window.innerWidth >= window.innerHeight){
            if (gewinnAus == 26) {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "250px";
                kugelId.style.left = "940px";
            }
            else {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "500px";
                kugelId.style.left = "940px";
            }
        }
        else {
            if (gewinnAus == 26) {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "120vw";
                kugelId.style.left = "50vw";
            }
            else {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "135vw";
                kugelId.style.left = "84vw";
            }
        }
    }
    else if(kugelId.name == "gewinn2") {
        if(window.innerWidth >= window.innerHeight){
            if (gewinnAus == 30) {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "250px";
                kugelId.style.left = "880px";
            }
            else {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "500px";
                kugelId.style.left = "880px";
            }
        }
        else {
            if (gewinnAus == 30) {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "120vw";
                kugelId.style.left = "50vw";
            }
            else {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "135vw";
                kugelId.style.left = "68.2vw";
            }
        }
    }
    else if(kugelId.name == "gewinn3") {
        if(window.innerWidth >= window.innerHeight){
            if (gewinnAus == 34) {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "250px";
                kugelId.style.left = "820px";
            }
            else {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "500px";
                kugelId.style.left = "820px";
            }
        }
        else {
            if (gewinnAus == 34) {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "120vw";
                kugelId.style.left = "50vw";
            }
            else {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "135vw";
                kugelId.style.left = "52.4vw";
            }
        }
    }
    else if(kugelId.name == "gewinn4") {
        if(window.innerWidth >= window.innerHeight){
            if (gewinnAus == 38) {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "250px";
                kugelId.style.left = "760px";
            }
            else {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "500px";
                kugelId.style.left = "760px";
            }
        }
        else {
            if (gewinnAus == 38) {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "120vw";
                kugelId.style.left = "50vw";
            }
            else {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "135vw";
                kugelId.style.left = "36.6vw";
            }
        }
    }
    else if(kugelId.name == "gewinn5") {
        if(window.innerWidth >= window.innerHeight){
            if (gewinnAus == 42) {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "250px";
                kugelId.style.left = "700px";
            }
            else {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "500px";
                kugelId.style.left = "700px";
            }
        }
        else {
            if (gewinnAus == 42) {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "120vw";
                kugelId.style.left = "50vw";
            }
            else {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "135vw";
                kugelId.style.left = "20.8vw";
            }
        }
    }
    else if(kugelId.name == "gewinn6") {
        if(window.innerWidth >= window.innerHeight){
            if (gewinnAus == 46) {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "250px";
                kugelId.style.left = "640px";
            }
            else {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "500px";
                kugelId.style.left = "640px";
            }
        }
        else {
            if (gewinnAus == 46) {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "120vw";
                kugelId.style.left = "50vw";
            }
            else {
                kugelId.style.color = "bisque";
                kugelId.style.backgroundColor = "orange";
                kugelId.style.top = "135vw";
                kugelId.style.left = "5vw";
            }
        }
    }
    else {
        if (gewinnAus < 48) {
        if(xyKugel.top == xyBox.top) { 
            site = getRandomInt(1, 4);
            while(site == 1) {
                site = getRandomInt(1, 4);
            }
        }
        else if(xyKugel.left+durchmesser == xyBox.right) {
            site = getRandomInt(1, 4);
            while(site == 2) {
                site = getRandomInt(1, 4);
            }
        }
        else if(xyKugel.top+durchmesser == xyBox.bottom) {
            site = getRandomInt(1, 4);
            while(site == 3) {
                site = getRandomInt(1, 4);
            }
        }
        else if(xyKugel.left == xyBox.left) {
            site = getRandomInt(1, 4);
            while(site == 4) {
                site = getRandomInt(1, 4);
            }
        }
        else {
                site = getRandomInt(1, 4);
                while(site == 1) {
                    site = getRandomInt(1, 4);
                }
            }
        switch(site) {
            case 1:
            yKugel = xyBox.top;
            xKugel = getRandomInt(xyBox.left, xyBox.right);
            kugelId.style.top = yKugel+'px';

            if(xKugel <= (xyBox.left + xyBox.right) / 2) {
                kugelId.style.left = xKugel+'px';
            }
            else {
                xKugel = xKugel - durchmesser;
                kugelId.style.left = xKugel+'px';
            }
            break;
            case 2:
            xKugel = xyBox.right;
            yKugel = getRandomInt(xyBox.top, xyBox.bottom);
            xKugel = xKugel - durchmesser;
            kugelId.style.left = xKugel+'px';
            if(yKugel <= (xyBox.top + xyBox.bottom) / 2) {
                kugelId.style.top = yKugel+'px';
            }
            else {
                yKugel = yKugel - durchmesser;
                kugelId.style.top = yKugel+'px';
            }
            break;
            case 3:
            yKugel = xyBox.bottom;
            xKugel = getRandomInt(xyBox.left, xyBox.right);
            yKugel = yKugel - durchmesser;
            kugelId.style.top = yKugel+'px';
            if(xKugel <= (xyBox.left + xyBox.right) / 2) {
                kugelId.style.left = xKugel+'px';
            }
            else {
                xKugel = xKugel - durchmesser;
                kugelId.style.left = xKugel+'px';
            }
            break;
            case 4:
            xKugel = xyBox.left;
            yKugel = getRandomInt(xyBox.top, xyBox.bottom);
            kugelId.style.left = xKugel+'px';
            if(yKugel <= (xyBox.top + xyBox.bottom) / 2) {
                kugelId.style.top = yKugel+'px';
            }
            else {
                yKugel = yKugel - durchmesser;
                kugelId.style.top = yKugel+'px';
            }
            break;
            }
        }
        else {
            kugelId.style.animation = "anim 4s forwards";
            kugelId.style.webkitAnimation = "anim 4s forwards";
        }
    }
}