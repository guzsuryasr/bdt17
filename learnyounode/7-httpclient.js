var http = require('http')

http.get(process.argv[2], function(respons){
    respons.setEncoding('utf8')
    respons.on('data', function(data){
        console.log(data)
    })
    respons.on('error', function(err){
        console.log(err)
    })
}).on('error', function(err){
    console.log(err)
})