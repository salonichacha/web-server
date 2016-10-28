var middleware = {

	requireAuthentication: function(request, response, next){
		console.log('Private Hit');
		next();

	}, logger: function(request, response, next){
		console.log('Request: ' +request.method +' '+ request.originalUrl);
		next();
	}
}

module.exports = middleware;