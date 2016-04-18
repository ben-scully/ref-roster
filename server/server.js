var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var basicRoutes = require('.././routes/basicRoutes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static( path.join(__dirname,'public') ) )

// Routes
app.use('/', basicRoutes)

// Port Setup
var port = normalizePort(process.env.PORT || 3000);
  http.listen(port, function () {
  console.log('Ref Roster app listening on port! ', port)
})

function normalizePort(val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

module.exports = app
