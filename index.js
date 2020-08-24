var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var fName = "." + q.pathname;
    if (fName === './') { fName = './index'; }
    fName = fName + ".html"
    fs.readFile(fName, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-type': 'text/html' });
            return res.end('404 Not Found')
            console.log(q.pathname);
        } else {
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data);
            return res.end();
        }
    })
}).listen(8080);

console.log(`Bhai kaam chalu hy 8080 number port pe...`);