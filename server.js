var express = require('express');
var app = express();
var db = require( './db/db')

app.use(express.static("./public"))

app.get('/knex', function (req, res) {
  db().then( function (data) {
    console.log("pigs: ", data)
  })
  res.end('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
