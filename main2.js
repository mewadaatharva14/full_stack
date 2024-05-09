// var http = require("http");
// http.createServer(function(req,res)
// {
//     res.writeHead(200,{'content-Type':'text/plain'});
//     res.write('<h1>Hello World</h1>')
//     res.end();
// }).listen(8080);


// write a node js script to jump on specific code by specify path on address bar or browser

// var http = require("http");
// http.createServer(function(req,res){
//     if(req.url=='/'){
//         res.writeHead(200,{'content-Type':'text/html'});
//         res.write('<h1>Home Page</h1>')
//         res.end()
//     }
//     else if(req.url=='/student'){
//         res.writeHead(200,{'content-Type':'text/plain'});
//         res.write('<h1>Student Page</h1>')
//         res.end("Thanks") 
//     }
//     else{
//         res.end("invalid request")
//     }
// }).listen(8080);


// var u = require("url");
// var addr = "http://localhost:8080/default.html?year=2024&month='may'";
// var q = u.parse(addr,true);
// console.log(q);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// var qdata = q.query;
// console.log(qdata.month);



// write a node js program to load an html file on node js webserver which is requested by client and print itsc contain


var h= require("http");
var fs=  require("fs");
var u = require("url");
h.createServer(function(req,res){
    var q = u.parse(req.url,true);
    data = fs.readFileSync("."+q.pathname);
    res.writeHead(200,{'content-Type':"text/html"});
    res.write(data);
    res.end();
}).listen(5000);
console.log("server started");