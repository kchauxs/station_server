
const config = {
    dbUrl: process.env.DB_URL, 
    port: process.env.PORT,  
    host: process.env.HOST,  
    mqtt_host: process.env.MQTT_HOST, 
    mqtt_username: process.env.MQTT_USER,  
    mqtt_password: process.env.MQTT_PASS,  
    mqtt_root: process.env.MQTT_ROOT, 
 
};

module.exports = config;