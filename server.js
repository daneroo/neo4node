var http = require('http');
var httpProxy = require('http-proxy');

var neoURL = process.env['GRAPHENEDB_URL'] || 'http://localhost:7474';
var neoUserPass = process.env['GRAPHENEDB_USERPASS'];
var port = Number(process.env.PORT || 8000);

console.log('listening on port %s and proxying all to %s', port, neoURL);

// simple proxy
// httpProxy.createProxyServer({target:neoURL}).listen(port);

// proxy that injects basic auth creds
var proxy = httpProxy.createProxyServer({
  target: neoURL
});

http.createServer(function(req, res) {
  // console.log('-req.headers.authorization',req.headers.authorization);
  if (!req.headers.authorization && neoUserPass) {
    var userPass = 'Basic ' + new Buffer(neoUserPass, 'ascii').toString("base64");
    req.headers.authorization = userPass;
    // console.log('+req.headers.authorization',userPass);
  }
  proxy.web(req, res, {});
}).listen(port);

// var db = new neo4j.GraphDatabase(neoURL);
// var neo4j = require('neo4j');
// var node = db.createNode({hello: 'world'});     // instantaneous, but...
// node.save(function (err, node) {    // ...this is what actually persists.
//     if (err) {
//         console.error('Error saving new node to database:', err);
//     } else {
//         console.log('Node saved to database with id:', node.id);
//     }
// });