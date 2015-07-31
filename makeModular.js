var mymodule = require('./FileFilterModule.js')
var dir = process.argv[2]
var ext = process.argv[3]

mymodule(dir,ext, 
	function(err,list){
		if(err)
			console.log('An error appeared'+err)
		list.forEach(
			function (file) {
				console.log(file);
		})
	}
)