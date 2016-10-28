var express = require('express');

var app = express();
var PORT = 3000;

var middleware = require('./middleware.js')

app.use(middleware.logger);

app.get('/', middleware.requireAuthentication , function(req, res){
	res.send('Hello Express from Server.js!');
});

app.get('/about',function(req, res){
	res.send('Hello About !');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT,function(){
	console.log('Express server started ' + PORT);
});