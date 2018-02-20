var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

var routes = require('./api/routes');

routes(app);
app.listen(port);
console.log('Started RESTful Thinking server on :' + port);
