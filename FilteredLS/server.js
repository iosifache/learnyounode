function getExt(name){
    if (name.lastIndexOf(".") != -1) return name.slice(name.lastIndexOf(".") + 1, name.length)
    else return "";
};
var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function(err, list){
    if (err) console.log(err)
    else list.forEach(function(element){
        if (getExt(element) == process.argv[3]) console.log(element);
    });
});
