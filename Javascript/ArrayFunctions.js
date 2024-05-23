let numbers = [3, 56, 2, 48 ,5]


// // map - Erstellt eine neue Liste und kann jedes Element dabei modifizieren
// function double(x){
//   return x * 2
// }

// let newNumbers = numbers.map(double)


// //1. Schritt function als paramter übergeben
// let newNumbers = numbers.map(function double(x){
//   return x * 2
// })

// //2. Schritt functionName entfernen
// let newNumbers = numbers.map(function (x){
//   return x * 2
// })

// // //3. Schritt function entfernen und ein Fat-Arrow hinzufügen
// let newNumbers = numbers.map( (x) => {
// return x * 2
// })

//(nur in bestimmten Fällen) 4. Schritt Klammern und return entfernen
// let newNumbers = numbers.map( x => x * 2)

// console.log(newNumbers)

// // filter - Erstelle eine neue Liste mit den Werten die true sind
// function filterList(x){
//   return x > 10
// }
// let newNumbers = numbers.filter(filterList)
// let newNumbers = numbers.filter( x =>  x > 10)
// console.log(newNumbers)




// // find - findet das erste Element das der Bedingung entspricht

// function findItem(x){
//   return x > 10
// }
// let gefundesElement = numbers.find(findItem)
// console.log(gefundesElement)

// // findIndex - findet das erste Element das der Bedingung entspricht, und gibt den Index zurück
// function findItemIndex(x){
//   return x > 10
// }
// let gefunderIndex = numbers.findIndex(findItemIndex)
// console.log(gefunderIndex)
