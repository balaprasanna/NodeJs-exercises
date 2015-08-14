var http = require('http')
var url =  require('url')
var port = process.argv[2]
function parseTime(date){
	return {
		"hour": date.getHours(),
			"minute": date.getMinutes(),
	    "second": date.getSeconds()
		}
}
function unixTime(date){
	return {"unixtime": date.getTime() }
}
var server = http.createServer(function (req,res) {
	var r = req.url;
	res.writeHead(200, {'Content-Type': 'application/json'});
	if(r == '/api/parsetime')
	{
		var urlInfo = url.parse(r,true)
		var query = urlInfo.query;
		var inputdate = new Date()
		if(query){
			 inputdate = query.iso
		}
		var date = inputdate;
		if(!date){
			res.end('Please key in corect date');
		}
		var result = parsetime(date)
   	
		res.write(JSON.stringify(result));
		res.end()
	}
	if(r == '/api/unixtime'){
		var result = unixTime(new Date())
		res.write(JSON.stringify(result));
		res.end('\n')
	}
})
server.listen(port);