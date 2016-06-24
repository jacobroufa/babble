var http = require('http');
var babble = require('technobabble/technobabble');

var server = http.createServer(function(req, res) {
  var content = babble.sentence();
  console.log(content);

  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(content),
    'Content-Type': 'text/plain'
  });

  res.end(content);
});

server.listen(3000, function() {
  console.log('listening on port 3000');
});
