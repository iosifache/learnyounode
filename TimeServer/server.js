var net = require('net');
var server = net.createServer(function(socket){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month<10) month = "0" + month;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var printData = year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";
    socket.end(printData);
});
server.listen(process.argv[2]);
