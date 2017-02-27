// import dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// set up import
var PORT = process.env.PORT || 6060;

// import db models 
var Saved = require("./models/Saved");

// configure expres server 
var app = express();

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// configure mongoose 
mongoose.connect("mongodb://heroku_wmrjn830:p5p32t4vd696t8ec467gdjrou3@ds161039.mlab.com:61039/heroku_wmrjn830");

var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
})

// create express routes 
app.get("/api/saved", function(req, res) { // route to get all saved articles 
    Saved.find({})
        .sort([
            ["date", "descending"]
        ])
        .exec(function(err, docs) {
            if (err) {
                res.send(err);
            } else {
                res.send(docs)
            }
        })
})

app.post("/api/saved", function(req, res) { // route to save a new article 
    console.log("BODY:", req.body);
    
    Saved.create({
        title: req.body.title,
        link: req.body.link
    }, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.send("Article successfully saved")
        };
    });
})

app.delete("/api/saved", function(req, res) { // route to delete a saved article 
    
})

app.put("/api/saved", function(req, res) { // route to update a saved article (comments)
    
})

app.get("*", function(req, res) { // route for home
    res.sendFile(__dirname + "/public/index.html");
})

// start express server listening 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})