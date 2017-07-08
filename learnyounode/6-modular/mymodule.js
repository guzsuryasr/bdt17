var fs = require('fs')
var path = require('path')

module.exports = function(dir, filterstring, callback){
    fs.readdir(dir, function(err, data){
    if(err){
        return callback(err, null)
    }
    
    var modular = []
    data.forEach(function(ls) {
        if(path.extname(ls) === "."+filterstring)
        {
            modular.push(ls)
        }
    }, this)

    return callback(null, modular)
})}