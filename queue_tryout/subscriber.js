
const tode = require('tode')
const queue = tode.Q;

//Queue Configurations
const queueConf = {
    host : '10.1.10.47',
    port : '15672',
    login : 'guest',
    password : 'guest',
    vhost : '/'
};
const qconn = queue.connect(queueConf);

// Came here

//Preparing Queue to connect
qconn.on('ready', function(){
    console.log("Subscription Queue is ready");
    queue.sub("new_queue", function (message, q) {
        console.log("Recieved Message is",message);
        q.shift()   //Deleting the message from Q.Otherwise the messages will be stalled
    });
});
