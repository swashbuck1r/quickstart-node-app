var http = require('http')

var port = 8080

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello quickstart-node-app!')
})

// allow Ctrl-C to interrupt and exit
process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    process.exit();
});

// allow kill signal (including docker stop) to interrupt and exit
process.on('SIGTERM', function() {
    console.log("Caught kill signal");
    process.exit();
});

server.listen(port)

console.log('Server listening on http://localhost:' + port)