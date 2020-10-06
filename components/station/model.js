const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,

        uppercase: true,
        required: [true, "Name required"]
    },
    latitude: {
        type: String,
        required: [true, "Latitude required"]
    },
    longitude: {
        type: String,
        required: [true, "Longitude required"]
    },
    state: {
        type: Boolean,
        default: true
    },
    date: { type: Date, default: Date.now }
});

const model = mongoose.model('Station', mySchema);
module.exports = model;