# Neo4node

Node example to talk to Neo4j (proxy)

More full fledged app is [here](https://github.com/aseemk/node-neo4j-template).


## Heroku
We are deployed on: [http://neo4node.herokuapp.com](http://neo4node.herokuapp.com)

This is how we would have added the neo4j sandbox instance:

    heroku addons:add graphenedb

but:

    $ heroku addons:add graphenedb
    Adding graphenedb on neo4node... failed
     !    That add-on plan is only available to select users.

So created a sandbox plan free account, and

    heroku config:set GRAPHENEDB_URL=http://neo4node.sb02.stations.graphenedb.com:24789
