// <!-- So findet man heraus, ob ein bestimmtes Jahr 
//     ein Schaltjahr ist:
// - Ein Jahr ist ein Schaltjahr,
// wenn es durch 4 gleichmäßig teilbar ist;
// - außer wenn dieses Jahr auch durch
//  100 gleichmäßig teilbar ist;
// - es sei denn, dieses Jahr ist auch
//  durch 400 gleichmäßig teilbar. -->

let jahr = document.getElementById("jahrInput")
let btn = document.getElementById("btn")
let ergebnis = document.getElementById("ergebnis")

btn.onclick = function (){


    if(isNaN(parseInt(jahr.value))){
        ergebnis.textContent = "Gib bitte gefälligst eine richtige Zahl ein";
        
    }
    if ((jahr.value % 4 === 0 && jahr.value % 100 !== 0) || (jahr.value % 400 === 0)) {
        ergebnis.textContent = `${jahr.value} ist ein Schaltjahr!`
    } else {
        ergebnis.textContent = `${jahr.value} ist kein Schaltjahr!`
    }
    


}

