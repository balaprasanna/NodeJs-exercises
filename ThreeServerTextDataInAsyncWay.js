var http = require('http')
var bl = require('bl')
var url = [process.argv[2],process.argv[3],process.argv[4]]
var result = []
var count =0;
function print(){
	result.forEach(function(data){
		console.log(data);
	})
}
	url.forEach(
		function (url,i)
		{
			http.get(url, function(response){
				response.pipe(bl(function(err,data){
					if(err)
						return console.error(err)
					result[i] = data.toString();					
					count++;
					if(count == 3){
						print();
					}
				}))				
			})
		})