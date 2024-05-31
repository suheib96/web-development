//Error Handling

// try{
//     console.log("Ich bin das erste console.log im Try Block")
    
//     testFunktion() // Error bzw Exception 

//     console.log("Ich werde nie erreicht")
// }catch (err){
//     console.log("Ein Fehler ist aufgetreten" ,err )
// }finally{
//     console.log("Ich werde immer ausgeführt")
// }



// console.log("Hallo ich bin eine CodeZeile außerhalb des Try-Catch-Blocks")

let ergebnis = 1 + 1 

if (ergebnis === 2){
    throw new Error("Bitte berechne nie wieder 1 + 1")
}else {
    console.log(ergebnis)
}