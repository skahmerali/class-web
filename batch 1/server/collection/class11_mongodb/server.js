var express = require("express");
var bodyParser = require('body-parser');
var cors = require("cors");
var morgan = require("morgan");
const mongoose = require("mongoose");


/////////////////////////////////////////////////////////////////////////////////////////////////
let dbURI = "mongodb+srv://dbuser:dbpassword@cluster0.9qvbs.mongodb.net/abc-database";
// let dbURI = 'mongodb://localhost:27017/abc-database';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

//https://mongoosejs.com/docs/connections.html#connection-events
////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////


// https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype
var userSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "password": String,
    "phone": String,
    "gender": String,
    "createdOn": { "type": Date, "default": Date.now },
    "activeSince": Date
});

// https://mongoosejs.com/docs/models.html
var userModel = mongoose.model("users", userSchema);


var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


app.post("/signup", (req, res, next) => {

    if (!req.body.name
        || !req.body.email
        || !req.body.password
        || !req.body.phone
        || !req.body.gender) {

        res.status(403).send(`
            please send name, email, passwod, phone and gender in json body.
            e.g:
            {
                "name": "malik",
                "email": "ahmer@gmail.com",
                "password": "abc",
                "phone": "03001234567",
                "gender": "Male"
            }`)
        return;
    }

    // https://mongoosejs.com/docs/models.html#compiling
    var newUser = new userModel({
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "phone": req.body.phone,
        "gender": req.body.gender,
    })
    // https://mongoosejs.com/docs/models.html#constructing-documents
    newUser.save((err, data) => {
        if (!err) {
            res.send({
                message: "user created"
            })
        } else {
            console.log(err);
            res.status(500).send({
                message: "user create error, " + err
            })
        }
    });

    // read: 
    // Querying/reading data from database: https://mongoosejs.com/docs/models.html#querying
    // deleting data from database: https://mongoosejs.com/docs/models.html#deleting
    // updating data in database: https://mongoosejs.com/docs/models.html#updating

})

app.post("/login", (req, res, next) => {

    if (!req.body.email || !req.body.password) {

        res.status(403).send(`
            please send email and passwod in json body.
            e.g:
            {
                "email": "ahmer@gmail.com",
                "password": "abc",
            }`)
        return;
    }

    userModel.findOne({ email: req.body.email },
        function (err, user) {
            if (err) {
                res.status(500).send({
                    message: "an error occured: " + JSON.stringify(err)
                });
            } else if (user) {


                if (user.password === req.body.password) {
                    res.send({
                        message: "login success",
                        user: {
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                            gender: user.gender,
                        }
                    });
                } else {
                    res.status(401).send({
                        message: "incorrect password"
                    })
                }


            } else {
                res.status(403).send({
                    message: "user not found"
                });
            }



        });


    // read: 
    // Querying/reading data from database: https://mongoosejs.com/docs/models.html#querying
    // deleting data from database: https://mongoosejs.com/docs/models.html#deleting
    // updating data in database: https://mongoosejs.com/docs/models.html#updating

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server is running on: ", PORT);
})