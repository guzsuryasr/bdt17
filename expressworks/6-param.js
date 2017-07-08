const express = require('express')
const app = express()
const path = require('path')

app.put('/message/:id', function(req, res){
    var id = req.params.id
    var kripto = require('crypto')
    .createHash('sha1')
    .update(new Date()
    .toDateString()+id)
    .digest('hex')
    res.send(kripto)
})
app.listen(process.argv[2])