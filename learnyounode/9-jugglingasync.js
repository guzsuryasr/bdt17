var http = require('http')

http.get(process.argv[2], function(response){
    var raw1 = ''
    response.setEncoding('utf8')
    response.on('error', function(err){
        console.log(err)
    })
    response.on('data', function(data){
        raw1 += data
    })
    response.on('end', function(){
        console.log(raw1)
        http.get(process.argv[3], function(response){
            var raw2 = ''
            response.setEncoding('utf8')
            response.on('error', function(err){
                console.log(err)
            })
            response.on('data', function(data){
                raw2 += data
            })
            response.on('end', function(){
                console.log(raw2)
                http.get(process.argv[4], function(response){
                    var raw3 = ''
                    response.setEncoding('utf8')
                    response.on('error', function(err){
                        console.log(err)
                    })
                    response.on('data', function(data){
                        raw3 += data
                    })
                    response.on('end', function(data){
                        console.log(raw3)
                    })
                })
            })
        })
    })
})