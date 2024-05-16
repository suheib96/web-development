const express = require("express")
const app = express()
const PORT = 3000

let hobbys = ["basketball", "programmieren"]
let einkaufsliste= ["Apfel", "Zwiebel", "Waschmaschinen-tabs"]


app.get("/hobbys", (req, res) => {
    res.send(hobbys)
} )

app.get("/einkaufsliste", (req, res) => {
    res.send(einkaufsliste)
} )



app.listen(PORT, () => {
    console.log(`Der Server wurde gestartet auf Port: ${PORT}`)
} )