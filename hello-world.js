const http = require('http');

const server = http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html'});
  console.log("first")
  res.end('<h2>Hello World!</h2>');
  console.log(req.url)
  
})

server.listen(5000, ()=>{
  console.log("the server is running")
});

// var http = require('http'); // 1 - Import Node.js core module

// var server = http.createServer(function (req, res) {   // 2 - creating server

//     //handle incomming requests here..
//     console.log("hellos")

// });

// server.listen(5000); //3 - listen for any incoming requests

// console.log('Node.js web server at port 5000 is running..')