var httpProxy = require('http-proxy');

var neoURL = process.env['GRAPHENEDB_URL'] || 'http://localhost:7474' // 'http://192.168.59.103:7474'
var port = Number(process.env.PORT || 8000);

console.log('listening on port %s and proxying all to %s',port,neoURL);
httpProxy.createProxyServer({target:neoURL}).listen(port);


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
