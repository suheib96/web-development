let car = {
    name: "Mercedes",
    farbe: "rot",
    baujahr: 2024,
    kilometer: 0,
    starteMotor: function(){
    alert("VROOOOM!")
    },
    
}

let car2 = {
    name: "Mercedes",
    farbe: "rot",
    baujahr: 2024,
    kilometer: 0,
    starteMotor: function(){
        
    alert("VROOOOM!")
    },
    
}

console.log(car.kilometer)
car.kilometer = 1000
console.log(car.kilometer)
console.log(car.name)
// car.starteMotor()

// Konstruktur - Constructor

function Computer(name,CPU,RAM,Preis){
    this.name = name
    this.CPU = CPU
    this.RAM = RAM
    this.Preis = Preis
}

let macbook = new Computer("Macbook","M2","16GB",1000)
let acer = new Computer("ACER","Intel Core I5","8GB",600)

console.log(macbook.name)
console.log(macbook.Preis)
console.log(acer.name)
console.log(acer.Preis)