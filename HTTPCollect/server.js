var http = require('http');
var get = "";
http.get(process.argv[2], function(response){
    response.on("data", function(data){
        get += data;
    });
    response.on("error", function(error){
        get += error;
    });
    response.on("end", function(){
        console.log(get.length);
        console.log(get);
    });
});
