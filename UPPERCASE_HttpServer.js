var http = require('http')
var map = require("through2-map")
var port = process.argv[2]
var server = http.createServer(function (req,res) {
	if (req.method != 'POST')
        return res.end('Please send me a POST\n')
    
	var result = map(function(chunk){
		return chunk.toString().toUpperCase()
	})
	req.pipe(result).pipe(res)
})
server.listen(port)