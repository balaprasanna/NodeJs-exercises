var fs = require('fs')
var path = require('path')
var dir = process.argv[2]
var ext = process.argv[3]
var readDirCallback = function readDirectoryCallback (err,list) {
		list.forEach ( function (file) { 
			if(path.extname(file.toString()) === '.'+ext)
			{
			console.log(file.toString())		
			}
		})
		
}
fs.readdir(dir,readDirCallback)