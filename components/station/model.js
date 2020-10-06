const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
 
        uppercase: true,
        required: [true,"Nombre requerido"]
    },
    latitude: {
        type: String,
        required:[true,"Latitud requerido"]
    },
    longitude: {
        type: String,
        required:[true,"Longitud requerido"]
    },
    state: {
        type: Boolean,
        default: true
    },
    date: { type: Date, default: Date.now }
});

const model = mongoose.model('Station', mySchema);
module.exports = model;