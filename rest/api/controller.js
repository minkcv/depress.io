'use strict';

exports.help = function(req, res) {
    res.send(`All statements are the opinions of this REST API<br>
              GET /bestapi: tells you what API is the best<br>
              GET /worstapi - tells you what API is the worst`);
}

exports.best = function(req, res) {
    res.send('REST is the best');
}

exports.worst = function(req, res) {
    res.send('SOAP is the worst');
}
