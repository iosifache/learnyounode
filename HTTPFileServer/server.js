var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response){
    var stream = fs.createReadStream(process.argv[3]);
    stream.pipe(response);
}).listen(process.argv[2]);
