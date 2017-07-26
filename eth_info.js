registerPlugin({
    name: 'Ethereum Price Bot',
    version: '1.0',
    description: 'Retrieves ETH price info in EUR and sets it as the name of a channel',
    author: 'ItzZuga',
    vars: {
        channel: {
            title: 'Chanel',
            type: 'channel'
        },
        interval: {
            title: 'Interval for the price to be updated update (In minutes)',
            type: 'number'
        }
    }
}, function(sinusbot, config) {


    var interval = config.interval * 60 * 1000;




    // Bitcoin Channel
    setInterval(function() {


        // API de GDAX para ETH-EUR
        http({
            url: 'https://api.gdax.com/products/ETH-EUR/ticker'
        }, function(err, res) {
            if (err) {
                log('phpCode: ' + err);
                return
            }

            if (res.statusCode == 200) {


                var responsee = JSON.parse(res.data);


                sinusbot.channelUpdate(config.channel, {
                    name: '[cspacer]1 ETH = ' + responsee.price + ' EUR'
                });
            }
        });


    }, interval);

});
