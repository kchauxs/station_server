const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    station: {
        type: Schema.ObjectId,
        ref: 'Station',
    },
    temp: {
        type: String,
        required: true,
    },
    devicetemp: {
        type: String,
        required: true,
    },
    humidity: {
        type: String,
        required: true,
    },
    rainintensity: {
        type: String,
        required: true,
    },
    date: { type: Date, default: Date.now }
});

const model = mongoose.model('Data', mySchema);
module.exports = model;


