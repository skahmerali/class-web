var express = require("express");
var fs = require("fs")
var app = express();
var http = require("http")
var color =require("colors")
var userModel = require("./app")


// class 1


var port = 3000;

// app.get("/",function(req,res){
    
//         res.send("Hello World !")
//     })
    
    // app.get("/home",(req,res)=>{
        //     res.send("welcome to home page ")
        // })
        
        
        //class 2
        
        //  fs.writeFileSync("text.txt","My Name is ahmer",(err,data)=>{
            //     console.log("file created")
            //  })
        
//  fs.writeFile("saqib.txt","hey my name is saqib ",(err,data)=>{
//     console.log("====> this is saqib file",(data))
//  })
//  fs.readFile("./saqib.txt","utf-8",(err,data)=>{
//     console.log(data)
//  })


//  fs.appendFile("./text.txt"," new add nh karoga",(err,data)=>{
// console.log(err)
//  })
// fs.readFile("./text.txt",'utf-8',(err,data)=>{
// console.log(data)
// })

// class 3rd



// fs.readFile("text.txt","utf-8",(err,data)=>{
//     console.log(data)
// })


http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write(JSON.stringify(userModel))
}).listen(port,()=>{
    console.log("server is running on " .rainbow , port )
})

// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-Type':'application/json'});
// res.write(JSON.stringify({
//     name:"sheikh ahmer ali",
//     class:"bscs"
// }))

// }).listen(5000)



// app.listen(port, ()=>{
//     console.log("server is running on" , port)
// })



// class 4


// this link for node js server;
// https://www.tutorialspoint.com/nodejs/index.htm#




// this link for officicial documentaion of database mongo db 
// https://mongoosejs.com/docs/5.x/docs/deprecations.html



