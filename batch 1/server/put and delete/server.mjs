import express from "express";
import cors from "cors"
// import axios from "axios";
import morgan from "morgan";
import mongoose from "mongoose";
const app = express();
// const axios = axios();
const dburi = process.env.DBURI



mongoose.connect(dburi);
const CrudUser = mongoose.model('CrudUser', {
    userName: String,
    email: String,
    address: String,
});




app.use(cors('short'));
app.use(express.json());
app.use(morgan());


const port = process.env.PORT || 3000;


// let users = [];
app.use((req, res, next) => {
    console.log("yae req ha user ki trf se", req.body)
    next();
})

app.put('/user/:id', (req, res) => {
    let updateObj = {}
    if (req.body.userName) {
      
        updateObj.userName = req.body.userName
        }
        if (req.body.email) {
            updateObj.email = req.body.email
        }
        if (req.body.address) {
            updateObj.address = req.body.address
        }
        CrudUser.findByIdAndUpdate(req.params.id,updateObj, { new: true },
            (err, data) => {
                if (!err) {
                    res.send(data)
                } else {
                    res.status(500).send("error happened")
                }
            })
   
});
app.delete('/user/:id', (req, res) => {

    CrudUser.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err) {
            res.send("user deleted")
        } else {
            res.status(500).send("error exicuted")
        }
    })

    // if (users[req.params.id]) {
    //     users[req.params.id] = {};
    //     res.send("userDeleted")
    // } else {
    //     res.send("user not found")
    // }
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})