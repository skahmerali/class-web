var express = require("express");
var fs = require("fs")
var http = require("http")
var color = require("colors")
var NewUsers = require("./app")
var cors = require("cors")
var app = express();
var bodyParser = require("body-parser");
var path= require("path");
var route = express.Router()
const mW = require("./Mw.js")
// const { Hash } = require("crypto");
// class 1


const port = process.env.PORT || 3000 ;

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


// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type':'application/json'});
//     res.write(JSON.stringify(userModel))
// }).listen(port,()=>{
//     console.log("server is running on " .rainbow , port )
// })

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



// class 5 





// var mongoose = require("mongoose");
// // const data = {
// //     name :"Kashan Adnan ",
// //     class:"5",
// //     age:8,
// //     phoneNumber:"03456276164"
// // }
// mongoose.connect("mongodb+srv://ahmerali:ahmerali@cluster0.slkv6.mongodb.net/ahmerali",{ useNewUrlParser: true, useUnifiedTopology: true })

// mongoose.connection.on("connected", ()=>{
// console.log("mongoos is connected")
// })

// mongoose.connection.on("disconnected", ()=>{
//     console.log("mongoos is disconnected");
//     process.exit(1)
//     })
    
// var userSchema = new mongoose.Schema({
//     stdName : String,
//     email : String,   
//     rollnumber : String,
//     phoneNumber : String,
//     id : Number,
//     data:{type:Date,default:Date.now}
// })
// var NewUsers = mongoose.model("NewUsers", userSchema)


// module.exports = {
//     userModelStd    
// }




// class 18-11-2022
// app.use(cors({
//     origin: '*',
//     credentials: true
// }));
// app.use(bodyParser.json());
// // app.use("/", express.static(path.resolve(path.join(__dirname, "public"))));
// app.use("/",express.static(path.resolve(path.join(__dirname,"public"))));


// app.post('/signup', (req, res, next) => {

//     if (!req.body.stdName
//         || !req.body.email
//         || !req.body.rollNumber
//         || !req.body.phoneNumber
//         || !req.body.id) {
//         res.status(405).send({
//             message:"please send valid data"
//         });
//         return
//     };

// NewUsers.findOne({email:req.body.email},(err,data)=>{
//     if(err){
//         console.log(err);
//         res.status(403).send("user already created")
//     }else{
//         res.status(200)
//     }
// })

//     var newPerson = new NewUsers({
//         "stdName": req.body.stdName,
//         "email": req.body.email,
//         "rollNumber": req.body.rollNumber,
//         "phoneNumber": req.body.phoneNumber,
//         "id": req.body.id,
//     });
// // JSON.parse(newPerson)
//     newPerson.save((err, data) => {
//         if (!err) {
//             console.log(data)
//             res.status(200).send({
//                 message: "User created",
                

//             })
//             console.log("user created")
//         } else {
//             console.log("==>>", err)
//             res.status(405).send({
//                 message: "user creation faild"
//             })
//         };

//     })
// });

// app.post("/login",(req,res)=>{
// var email=req.body.email;
// var password=req.body.password;
// console.log("email",email)
// console.log("password" , password)
// })


// app.listen(port, () => {
//     console.log("server is running on", port)
// })

// const middleWare = (req, res , next) =>{
//     if(req.query.userType){
//         res.send("hello new user")
//     }else{
//         next()
//     }
// }
// app.use(middleWare)




// saturday clas 26/11/22


// // app.use(mW); 
// route.use(mW);

// route.get("/",  (req,res,next)=>{
    


//     res.send("Hello home page !")
// })
// route.get("/user",(req,res,next)=>{
    
//     res.send("Hello user page")
// })
// app.get("/about",(req,res,next)=>{
    
//     res.send("Hello about page")
// })





// app.use('/',route);





app.delete()


app.listen(port, () => {
    console.log("server is running on", port)
})




// JavaScript Promises – The promise.then, promise.catch and promise.finally Methods Explained
// A promise is an object in JavaScript that will produce a value sometime in the future. This usually applies to asynchronous operations.