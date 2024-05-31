import fetch from "node-fetch"

async function fetchPokemon (id){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    console.log("Daten werden aktuell noch gezogen aus der Api")
    const data = await res.json()
    
    console.log(data.weight)


}

fetchPokemon(2)