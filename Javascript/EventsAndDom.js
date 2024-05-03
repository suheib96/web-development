// Damit kriegt man den ersten Button aus der HTML Datei

// let btn1 = document.getElementsByTagName("button")[0]
// btn1.onclick = function (){
//     alert("Du hast mich angeklickt")
// }

let button1 = document.getElementById("buttonClick");
button1.onclick = function () {
  alert("Du hast mich angeklickt");
};

let button2 = document.getElementById("buttonOver");
button2.onmouseover = function () {
  alert("Du schwebst über mir");
};

let button3 = document.getElementById("buttonLeave");
button3.onmouseleave = function () {
  alert("Du hast mich verlassen");
};

let button4 = document.getElementById("buttonWheel");
button4.onmousewheel = function () {
  alert("Schön das du mich überrollst");
};



let header = document.getElementById("bigHeader")
header.onclick = function (){
    alert("Du hast die große Überschrift angeklickt. Bravo !")
}
