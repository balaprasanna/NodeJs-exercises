var fs = require('fs')
var fun = function callback (err, data){
	console.log(data.toString().split('\n').length-1)
	}
var contents = fs.readFile(process.argv[2], fun)	