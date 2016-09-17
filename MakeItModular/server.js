var module = require('./module.js');
module(process.argv[2], process.argv[3], function (err, list){
    if (err) console.log(err)
    else list.forEach(function(element){
        console.log(element);
    });
})
