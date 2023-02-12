var express = require("express");
var fs = require("fs")
var http = require("http")
var color = require("colors")
var NewUsers = require("./app")
var cors = require("cors")
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var axios = require('axios')
// app.use()
const port = process.env.PORT || 3000;
app.use(cors({
    origin: '*',
    credentials: true
}));
// function abc() {
//     axios.post(
//         {
//             method: 'post',
//             url: '/user/12345',
//             data: data
//         }
//     )
//         .then(() => {

//         })
//         .catch(() => {

//         })
// }

 