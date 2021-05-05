
const RabbitMQ = require('rabbitmq-node');

const rabbitmq = new RabbitMQ('amqp://127.0.0.1');

rabbitmq.publish('new_queue',{'hi':'sa'});

rabbitmq.on('ready', function(){
    console.log(`Publisher Queue is ready`);
    const message = 123;
    rabbitmq.publish("new_queue",message);
    console.log(`Message published to Queue`);
});

// rabbitmq.subscribe('nameChannel');
// rabbitmq.publish('nameChannel', {message: 'Hello World'});


// var RabbitMQ = require('rabbitmq-node');

// var rabbitmq = new RabbitMQ('amqp://localhost');

// let RabbitMQ = require('rabbitmq-node');

// rabbitmq.on('message', function(channel, message) {
//   console.log(message);
// });

// rabbitmq.on('error', function(err) {
//   console.error(err);
// });

// rabbitmq.on('logs', function(print_log) {
//   console.info(print_log);
// });

// rabbitmq.subscribe('nameChannel');
// rabbitmq.publish('nameChannel', {message: 'Hello World'});