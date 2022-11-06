var express = require("express");
var app = express()
// const app = () => {} 
const PORT = 3000;
app.get("/", function (req, res,next) {



    res.end("hello world"+"kashan");
    res.end()
}).listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
});



// app.listen(PORT,()=>{
//     console.log("server is running on", PORT)
// })