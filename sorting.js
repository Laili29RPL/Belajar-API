const express = require("express")
const app = express()

//set to read a request data from json format
app.use(express.json())
//json is STRING 

app.post("/sorting" , (request, response)=>{

    siswa = request.body.siswa
    let result

    result = siswa.sort(function(a,b) {
        return a.umur- b.umur
    })
    return response.json({
        "Sort":result
    })
})
app.listen(8000, ()=> {
    console.log(`Server run on port 8000`);
})
