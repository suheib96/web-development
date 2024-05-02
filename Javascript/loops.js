let i = 1;

// console.log(i)
// i++
// console.log(i)
// i++
// console.log(i)

// For Loop -> start; ende;sprungwert
for (i; i < 1; i++) {
  console.log("Marc Ehrlich ist in einem dunklen Raum: " + i);
}

console.log("Ich bin raus aus der Schleife");

let programmingLanguages = [
  "C#",
  "Python",
  "PHP",
  "Javascript",
  "Kotlin",
  "Java",
  "Ruby",
  "Go",
  "Rust",
  "Cobol",
  "Bash",
  "C++",
];
// x ist in diesem Fall nur ein Platzhaltervariable, die bei jedem Schleifendurchgang überschrieben wird
for (x of programmingLanguages) {
//   console.log(x);
    document.write(x + "<br>")
}
console.log("Ich bin raus aus der Schleife");


let myName = "Ralf"
for(x of myName){
    console.log(x)
}
console.log("Ich bin raus aus der Schleife");
// While loop

let zahl = 20
while (zahl < 100){
    // console.log("Javascript macht Spaß")
    document.write("Javascript ist cool" + "<br>")
    zahl +=2 // zahl = zahl + 2
}

// do/while Schleife -> Der Code wird garantiert mindestens einmal durchlaufen

let zahl2 = 25

do {
    console.log("Javasript ist cool")
    zahl2--
}while (zahl2 > 20)


