const express = require ("express")

//inisialisasi
const app = express()

// set to read a request data from JSON format
app.use(express.json())
// JSON is String

app.post("/kata",(request,response)=>{
    let kalimat = request.body.kalimat
    kalimat = kalimat.toLowerCase()

    let vokal = 0
    let konsonan = 0

    for (let i = 0; i <kalimat.length; i++) {
        if (kalimat[i] === "a" ||kalimat[i] === "i" ||kalimat[i] === "u" ||kalimat[i] === "e" ||kalimat[i] === "o") {
            vokal += 1
        }
        if (kalimat[i] !== "a" &&kalimat[i] !== "i" &&kalimat[i] !== "u" &&kalimat[i] !== "e" &&kalimat[i] !== "o") {
            konsonan += 1
        }
        
    }
    return response.json({
        "Jumlah Huruf Vokal" : vokal,
        "Jumlah Huruf Konsonan" : konsonan
    })
})


app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})