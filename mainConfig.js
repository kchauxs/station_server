const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://user_atlas:HUxmMDo2zyuVJKG3@cluster0.kmsqv.mongodb.net/place?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    mqtt_host: process.env.MQTT_HOST || 'ws://ioticos.org:8093/mqtt',
    mqtt_username: process.env.MQTT_USER || 'aeocqBfrHtQw5ks',
    mqtt_password: process.env.MQTT_PASS || 'VLz9yuJUtjf3vWm',
    mqtt_root: process.env.MQTT_ROOT || 'WvHhWgvNVYp6Qak',
 
};

module.exports = config;


// const config = {
//     dbUrl: process.env.DB_URL, 
//     port: process.env.PORT,  
//     host: process.env.HOST,  
//     mqtt_host: process.env.MQTT_HOST, 
//     mqtt_username: process.env.MQTT_USER,  
//     mqtt_password: process.env.MQTT_PASS,  
//     mqtt_root: process.env.MQTT_ROOT, 
 
// };

// module.exports = config;