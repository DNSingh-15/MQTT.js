const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    client.subscribe("presence"); 
    console.log(" Client has subscribed successfully ");
});

client.on('message', function (topic, message) {
    console.log(message.toString())
    // client.end()
})