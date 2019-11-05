var gui = require("nw.gui");
var win = gui.Window.get();
var express = require('express');
var app = express();
const path = require('path'); var __dirname = path.resolve();
var session = require('express-session');
var bodyParser = require('body-parser');
var io = require('socket.io')(8081);
var fs = require('fs');
app.use('/', express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);

document.addEventListener("DOMContentLoaded", function() {
  // close window button
  $(".closeWindow").click(function() {
    win.close();
  });
    $(".miniWindow").click(function() {
   win.minimize();


win.removeAllListeners('minimize');
  });
});
