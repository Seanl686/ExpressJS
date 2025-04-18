var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("For God so loved the world, that he gave his only Son, that whoever believes in him should not perish, but have eternal life. John 3:16");
});

app.listen(3007);

var express = require('express');
var app = express();

app.get('/316', function(req, res){
   res.send("For God so loved the world, that he gave his only Son, that whoever believes in him should not perish, but have eternal life. John 3:16");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.listen(3008);