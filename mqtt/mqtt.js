const mqtt = require('mqtt')
// const config = require('../config')
const controller = require('../components/data/controller');

module.exports = function client_mqtt(config) {

    const WebSocket_URL = config.mqtt_host

    const options = {
        connectTimeout: 4000,

        username: config.mqtt_username,
        password: config.mqtt_password,

        keepalive: 60,
        clean: true,
    }

    const client = mqtt.connect(WebSocket_URL, options)

    client.on('connect', () => {

        console.log('Connection to Broker Success!')

        client.subscribe([`${config.mqtt_root}/data`], (err) => {
            console.log(err || 'Subscribe Success')
        })
    })


    client.on('message', (topic, message) => {
        console.log('Received form', topic, ':', message.toString())
        process_msg(message);
    })

    function process_msg(message) {

        let msg = message.toString().split(",")
        data = {
            station: msg[0],
            temp: msg[1],
            devicetemp: msg[2],
            humidity: msg[3],
            rainintensity: msg[4],
        }

        controller.addData(data)
            .then((fullMessage) => {

                console.log("AGREDADO! ->", fullMessage)

            })
            .catch(e => {

                console.log(e || 'Publish Success')

            })

    }
}