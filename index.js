var http = require('http');
var url = require('url');
var swig = require('swig');
var TechnoBabble = require('technobabble');

var server = http.createServer(function(req, res) {
  var query = url.parse(req.url, true).query;
  var babble = new TechnoBabble({ length: query.length, subject: query.subject });
  var content = swig.renderFile('index.html', {
    babble: babble().replace(/^undefined /, ''),
    length: query.length,
    subject: query.subject
  });

  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(content),
    'Content-Type': 'text/html'
  });

  res.end(content);
});

server.listen(3000, function() {
  console.log('listening on port 3000');
});
