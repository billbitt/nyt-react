// import dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

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
mongoose.connect("");

var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
})

// create express routes 
app.get("/api/saved", function(req, res) { // route to get all saved articles 
    
})

app.post("/api/saved", function(req, res) { // route to save a new article 
    
})

app.delete("/api/saved", function(req, res) { // route to delete a saved article 
    
})

app.put("/api/saved", function(req, res) { // route to update a saved article (comments)
    
})

// start express server listening 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})