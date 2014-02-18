/**
 * Created by prof on 18.02.14.
 */

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    console.log(req);
    res.end('Hello Http');
});

server.listen(9000);
