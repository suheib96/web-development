// Aufgabe 1:
// Schreibt ein Skript, das eine Temperatur in Celsius 
// (speichert einen Wert in einer Variablen) nimmt und diese in Fahrenheit umwandelt.
//  Nutzt dafür die Formel: Fahrenheit = Celsius * 9/5 + 32.
let celsius = 30;
let fahrenheit = celsius * 9/5 + 32;
console.log(celsius + "°C entspricht "+ fahrenheit + "°F") 
console.log(`${celsius}°C entspricht ${fahrenheit}°F`) 


// Aufgabe2:
// Legt eine leere Liste an und fügt ihr programmatisch mindestens fünf beliebige Elemente
//  hinzu. Dann erstellt eine `for`-Schleife, die diese Elemente in der Konsole ausgibt. 
// Optional könnt ihr `prompt()` verwenden, um den Nutzer auf der Webseite nach Eingaben 
// zu fragen und diese in die Liste einzufügen. Ihr könnt eine Schleife nutzen, damit der 
// Nutzer fünfmal etwas eingibt.

let meineListe = [];
// let eingabe = prompt("Gib bitte ein Obst ein: ")
// meineListe.push(eingabe)
meineListe.push("Apfel")
meineListe.push("Banane")
meineListe.push("Mango")
meineListe.push("Wassermelone")
meineListe.push("Pfirsich")

for (obst of meineListe){
    console.log(obst)
}







