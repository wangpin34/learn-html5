var http = require('http');
var fs = require('fs');

var conf = {
	ip:'127.0.0.1',
	port:5000
};

function getFileContent(filepath,callback){
	var isHtml = true;
	var tempArr = filepath.split('.');
	var fileExt = tempArr[tempArr.length-1];
	if(fileExt ==='js' || fileExt === 'css'){
	   
	   	isHtml = false;
	}else{
		isHtml = true;
	   	
	}

	filepath = filepath === '/'?'/index.html':filepath;

	var filepath = __dirname + filepath;
	console.log('Read request data from file:'+filepath);
	if(fs.existsSync(filepath)){
		fs.readFile(filepath,{encoding:'utf-8'},function(err,data){
 		if(err) throw err;
 		callback(data,isHtml);
		})
	}else{
		return;
	}	
}

http.createServer(function(request, response) {
	var reqPath = request.url;
	console.log('request path:'+reqPath+'.');

	if (request.url === '/favicon.ico') {
    	response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    	response.end();
    	console.log('favicon requested');
    	return;
  	}
	
	var callback = function(data,isHtml){
		if(isHtml){
			response.writeHead(200, {'Content-Type': 'text/html'});
		 	response.end(data);
		}else{
			response.end(data);
		}
		
	}
   	getFileContent(reqPath,callback);
}).listen(conf.port, conf.ip);
console.log('Server running at http://'+conf.ip+':'+conf.port+'/');