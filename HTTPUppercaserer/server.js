var http = require('http');
var map = require('through2-map');
http.createServer(function (req, res){
    req.pipe(map(function (chunk){
        return chunk.toString().toUpperCase();
    })).pipe(response);
}).listen(process.argv[2]);
