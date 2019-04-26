var amqp = require('amqplib/callback_api');
amqp.connect('amqp://localhost', function(err, con) {
    con.createChannel(function(err, ch) {
        var ex = 'order';
        ch.assertExchange(ex, '', {durable : false});
        
    })
})