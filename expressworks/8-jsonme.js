const express = require('express')
const path = require('path')
const fs = require ('fs')
const app = express()

app.get('/books', function(req, res){
    fs.readFile(process.argv[3], function(error, callback){
        if(error){
            res.end('Gagal baca')
        }
        else{
            res.send(JSON.parse(callback))
        }
    })
})
app.listen(process.argv[2])