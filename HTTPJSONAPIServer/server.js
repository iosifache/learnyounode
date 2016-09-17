function getDatas(data){
    return {
        "hour": data.getHours(),
        "minute": data.getMinutes(),
        "second": data.getSeconds()
    }
};
function getUnix(data){
    return {
        "unixtime": data.getTime()
    }
};
var http = require('http');
var url = require('url');
var server = http.createServer(function(req, res){
    var urlOBJ = url.parse(req.url, true);
    var time = new Date(urlOBJ.query.iso);
    var result;
    if (/^\/api\/parsetime/.test(req.url)){
        result = getDatas(time);
    }
    else if (/^\/api\/unixtime/.test(req.url)){
        result = getUnix(time);
    };
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(result));
})
server.listen(process.argv[2]);
