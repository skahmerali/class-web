const imageModel = require("./db");
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const morgan = require("morgan");
const jwt = require('jsonwebtoken'); // https://github.com/auth0/node-jsonwebtoken
//is JWT secure? https://stackoverflow.com/questions/27301557/if-you-can-decode-jwt-how-are-they-secure
const path = require("path")
const { userModel } = require("./dbrepo/models");
const authRoutes = require("./routes/auth");


const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use(cors({
    origin: '*',
    credentials: true
}));

const Storage = multer.diskStorage({
    destination: "uploads-FolderName",
    filename: function (req, file, cb) {
        cb(null, file.orginalname);
    }
});
const upload = multer({ storage: Storage }).single('imgTesting')

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        } else {
            const imageUpload = new imageModel({
                name: req.body.name,
                image: {
                    data: req.file.filename,
                    contentType: "image/png",
                },
            })
            imageUpload.save().then(() => res.send("successfully upload! ")
                .catch((err) => { console.log(err) }))
        }
    })
})