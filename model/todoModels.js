const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    name: { type: String },
    done: { type: Boolean }
});

module.exports = mongoose.model("Todos", TodoSchema);