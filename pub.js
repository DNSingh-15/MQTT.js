const mqtt = require('mqtt')
// broker = mqtt://test.mosquitto.org
const client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    console.log('Connected')
    client.subscribe('presence', function (err) {
        if (!err) {
            client.publish('presence', 'Hello world')
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})

