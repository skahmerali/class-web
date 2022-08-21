// import fs from 'fs';
// const fs = require("fs");
var posts = [];
var div =document.createElement('div');
function clickText(){
    var post = document.getElementById("post").value;
    posts.push(post);
    document.getElementById("screenPost").innerText = posts;
    
    console.log(posts);
    // console.log("notghing")
   
}