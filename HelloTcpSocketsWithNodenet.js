var net = require('net')
var strftime = require('strftime')
var dateTitle = "YYYY-MM-DD hh:mm"
var port = process.argv[2]
var server = net.createServer(function (socket) {
	//socket.write(dateTitle+'\n');
	socket.end(strftime('%Y-%m-%d %H:%M'))

	// setInterval(function(){
	// 	socket.write('\n'+strftime('%Y %m %d %H:%M'))
	// },2000);
	
	})
server.listen(port);
