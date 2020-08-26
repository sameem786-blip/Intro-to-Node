var http = require('http'); // http module
var fs = require('fs'); //file system modulw
var url = require('url'); //url module
const prot = process.env.PORT || 5000

http.createServer(function(req, res) { //function to ceate server on localhost
    var q = url.parse(req.url, true); // q = input url
    var fName = "." + q.pathname; // file name = .url name
    if (fName === './') { fName = './index'; } //condition to check if the input url is empty so it would auto fill
    fName = fName + ".html" //removing .filetype from the input url
    fs.readFile(fName, function(err, data) { //read file//function to store err and data
        if (err) { //confition for error if file does not exist
            res.writeHead(404, { 'Content-type': 'text/html' }); //response to write on header
            return res.end('404 Not Found'); //return response in the end as a 404
            console.log(q.pathname); //log url pathname on console
        } else {
            res.writeHead(200, { 'Content-type': 'text/html' }); //if file succesfully found make header of html type
            res.write(data); //print content of that file
            return res.end(); //return value
        }
    })
}).listen(PORT); //reserve port for this operation

console.log(`Bhai kaam chalu hy 8080 number port pe...`);