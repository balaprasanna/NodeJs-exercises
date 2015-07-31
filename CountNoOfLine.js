var fs = require('fs')
var filepath = process.argv[2]
var buffer = fs.readFileSync(filepath)
var str = buffer.toString()
var lines = str.split('\n')
console.log(lines.length-1)