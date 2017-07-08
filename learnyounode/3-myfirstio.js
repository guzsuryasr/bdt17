var fs = require('fs')

var content = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;

console.log(content);