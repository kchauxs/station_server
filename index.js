const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');

const db = require("./db")
const config = require('./config')
const router = require("./network/router")
const client_mqtt = require('./mqtt/mqtt');

// client_mqtt(config)
db(config.dbUrl)

app.use(cors());    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app)


server.listen(config.port, () => {
    console.log(`App listening:${config.port}`)
})