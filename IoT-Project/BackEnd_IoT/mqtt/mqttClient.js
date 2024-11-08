const mqtt = require('mqtt');
const options = {
    port: 1993,
    host: '192.168.134.35',
    // host: '192.168.32.11',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'hieuluu',
    password: '123456'
};
const mqttClient = mqtt.connect(options);

mqttClient.on('connect', () => {
    console.log('Connected to MQTT broker');
    mqttClient.subscribe('sensor/datas', (err) => {
      if (err) {
        console.error('Failed to subscribe to topic');
      }
    });
    mqttClient.subscribe('iot/fan/status', (err) => {
      if (err) {
        console.error('Failed to subscribe to topic led');
      }
    });
    mqttClient.subscribe('iot/air/status', (err) => {
      if (err) {
        console.error('Failed to subscribe to topic air');
      }
    });
    mqttClient.subscribe('iot/lamp/status', (err) => {
      if (err) {
        console.error('Failed to subscribe to topic fridge');
      }
    });
});

module.exports = mqttClient;