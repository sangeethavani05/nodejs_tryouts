
const RabbitMQ = require('rabbitmq-node');

const rabbitmq = new RabbitMQ('amqp://10.1.10.47');

rabbitmq.publish('new_queue',{'hi':'sa'});

// rabbitmq.on('ready', function(){
//     console.log(`Publisher Queue is ready`);
//     const message = 123;
//     rabbitmq.publish("new_queue",message);
//     console.log(`Message published to Queue`);
// });