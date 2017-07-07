var fs = require('fs')
var data = process.argv[2]

fs.readFile(data, function(err, contents){
    if(err){
        console.log("Error")
    }
    var content = contents.toString().split('\n').length - 1
    console.log(content)
})