const express = require("express")
const app = express()

//set to read a request data from json format
app.use(express.json())
//json is STRING 

app.post("/barang" , (request, response)=>{
     //store the request data
     let data = request.body.barang
     let total = 0

     for (let i = 0; i < harga.length; i++) {
        total += harga[i] * jumlah[i]
     }
     ppn = total * 10 / 100
     totalbayar = ppn


    //give a respon data
    return response.json({
        "total_bayar": totalbayar
    })
})
app.listen(8000, ()=> {
    console.log(`Server run on port 8000`);
})