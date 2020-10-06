const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: {
            values: ["ADMIN_ROLE", 'USER_ROLE'],
            message: "{VALUE} no es un rol valido"
        }
    },
    state: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', mySchema);