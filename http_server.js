var http = require('http');


http.createServer(function (req, res) {
  if((req.url).indexOf('/abhi')>-1)
	{
  res.write('You Just Now hit the server with /abhi ');		
	}
	else{
	res.write('You Just Now hit the server');}

  res.end(); 
}).listen(8080); 