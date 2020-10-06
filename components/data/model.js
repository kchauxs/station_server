const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    station: {
        type: Schema.ObjectId,
        ref: 'Station',
        required: [true, "Station required"]
    },
    temp: {
        type: String,
        required: [true, "Temp required"]
    },
    devicetemp: {
        type: String,
        required: [true, "Devicetemp required"]
    },
    humidity: {
        type: String,
        required: [true, "Humidity required"]
    },
    rainintensity: {
        type: String,
        required: [true, "Rain intensity required"]
    },
    date: { type: Date, default: Date.now }
});

const model = mongoose.model('Data', mySchema);
module.exports = model;


