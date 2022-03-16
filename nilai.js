const express = require("express")
const app = express()

//set to read a request data from json format
app.use(express.json())
//json is STRING 

app.post("/nilaisiswa" , (request, response)=>{
  //store the request data
  let data = request.body.nilaisiswa
  let lulus = 0, tidakLulus = 0

  niali_ratarata= (data[i].nilaisiswa+data[i].nilaisiswa)/2

 
    if (nilai_ratarata <= 60){
        tidakLulus += 1
    }else if (nilai_ratarata >= 61){
        lulus += 1
    }

 
 
 //give a respon data
 return response.json({
    "Lulus": lulus,
    "Tidaklulus": tidakLulus,
    "Nilai Rata Rata": nilai_ratarata
})
})
app.listen(8000, ()=> {
    console.log(`Server run on port 8000`);
})
