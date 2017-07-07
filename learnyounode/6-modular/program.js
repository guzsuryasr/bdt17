var module = require('./mymodule.js')

module(process.argv[2], process.argv[3], function(err, data){
    if(err){
        console.log(err)
    }
    data.forEach(function(name) {
        console.log(name)
    })
})