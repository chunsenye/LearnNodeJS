var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    console.log('someone has visited my first node server !');
    let filePath;
    if (request.url === '/') {
        filePath='index.html';
    } else if (request.url === '/login') {
        filePath='login.html';
    } else if (request.url === '/register') {
        filePath='register.html';
    } else {
        filePath='nofound.html';
    }
    // filePath.substr(1) 去掉开头的 /
    fs.readFile(filePath,function(err,data ){
        response.write(''+data);
        response.end();
    }) 
})
server.listen(8090, function () {
    console.log('server started at http://localhost:8090  ......')
});