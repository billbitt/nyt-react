var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SavedSchema = new Schema({
    title: {
        type: String
    },
    link: {
        type: String
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String,
        default: ""
    }
});

var Saved = mongoose.model("Saved", SavedSchema);

module.exports = Saved;