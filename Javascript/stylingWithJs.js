let button1 = document.getElementById("btn1");
let header1 = document.getElementById("header1");

button1.onclick = function () {
  header1.style.color = "red";
  header1.style.backgroundColor = "yellow";
  header1.style.fontSize = "60px";
  header1.style.textAlign = "center";
};

let button2 = document.getElementById("btn2");
let header2 = document.getElementById("header2");

button2.onclick = function () {
  header2.style.cssText =
    "color: red; background-color: yellow; font-size: 60px; text-align:center";
};

let button3 = document.getElementById("btn3");
let header3 = document.getElementById("header3");

button3.onclick = function () {
  header3.setAttribute("class", "test");
  header3.innerHTML = "Ich wurde verändert";
};


