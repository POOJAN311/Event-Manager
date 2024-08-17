const mongoose = require('mongoose');

// const itemSchema = new mongoose.Schema({
//     name: String,
//     email: String
// })

const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    uniqueCode: String,
    count: { type: Number, default: 0 },
});

const dataModel = mongoose.model("Data", dataSchema);

module.exports = dataModel;