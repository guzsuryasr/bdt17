const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')

app.use(bodyparser.urlencoded({extended: false}))


app.post('/form', function(req, res){
    var respon = req.body.str.split('').reverse().join('')
    res.end(respon)
})
app.listen(process.argv[2])