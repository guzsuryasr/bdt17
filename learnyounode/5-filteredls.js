var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function(error, contents){
    if(error){
        console.log(error)
    }
    contents.forEach(function(ls) {
        if(path.extname(ls) === "."+process.argv[3])
        {
            console.log(ls)
        }
    })
})

