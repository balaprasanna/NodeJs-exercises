var http = require('http')
var baseurl = process.argv[2];
var request = require('request');

var options = {
  url: baseurl,
  headers: {
    'User-Agent': 'request'
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
  console.log(response.statusCode)
})