// load library express
let express = require("express")

// inisiasi object baru dari express
let app = express()

//endpoint pertama 
app.post("/data", (request, response) => {    
   
let data = [
    {nis:101, nama:"Kejora", alamat:"Araya"},
    {nis:102, nama:"Atlanta", alamat:"Sawojajar"},
    {nis:103, nama:"Faiza", alamat:"Sawojajar"},
    {nis:104, nama:"Rarazu", alamat:"Pakis"},
    {nis:105, nama:"Laili", alamat:"Pakisaji"},
    {nis:106, nama:"Amanda", alamat:"Sidoarjo"},
    {nis:107, nama:"Lukas", alamat:"Araya"},
    {nis:108, nama:"Vina", alamat:"Banyuwangi"},
    {nis:109, nama:"Rossa", alamat:"Banyuwangi"},
    {nis:110, nama:"Septian", alamat:"Bogor"}
]
let data = request.body.data


for (let i = 0; i < data.length; i++){
    if (search == data[i].data.alamat){
        jml_data += 1
    }
}
return response.json({
   "Jumlah Data": jml_data,
   "Data": data
})
})
app.listen(8000, ()=> {
    console.log(`Server run on port 8000`);
})