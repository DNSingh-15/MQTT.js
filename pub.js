const mqtt = require('mqtt')
const client = mqtt.connect('url')

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

