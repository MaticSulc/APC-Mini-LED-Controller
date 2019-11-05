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
//var input;
//var output;


//io.on('connection', function(socket) {

/*
    function checkVariable() {
        if(typeof input !== "undefined" && typeof output !== "undefined"){
            socket.on('input_midi', function(data){
                console.log("INPUT CHOSEN: " + data.name);
               // input = new easymidi.Input(data.name);
            });
            socket.on('output_midi', function(data){
                console.log("OUTPUT CHOSEN: " + data.name);
                //output = new easymidi.Output(data.name);
            });
            socket.on('pressed_btn', function(data){
                data.id = parseInt(data.id, 10);
                console.log('pressed', data.color, data.id); //DEBUG
                pressed[data.id] = data.color;
            });
            socket.on('released_btn', function(data){
                data.id = parseInt(data.id, 10);
                console.log('released', data.color, data.id); //DEBUG
               // output.send('noteon', { note: data.id, velocity: data.color});
                released[data.id] = data.color;
            });

            for(var i = 64;i<90;i++){
                //output.send('noteon', {
                   // note: i,
                   // velocity: "01"
               // }); //turn on side and bottom leds init
            }
           input.on('noteon', function(msg) {
                if (msg.note <= 63) { //inside btns
                   console.log('noteon ', "NOTE ", msg.note, " VELOCITY ", msg.velocity, " CHANNEL ", msg.channel, "COLOR:" ,pressed[msg.note]); //DEBUG
                  //  output.send('noteon', {
                     //   note: msg.note,
                     //   velocity: pressed[msg.note]
                    //});
                }//else //side buttons
                  //  output.send('noteon', {
                    //    note: msg.note,
                   //     velocity: "00"
                   // });
            });
            input.on('noteoff', function(msg) {
                if (msg.note <= 63) { //inside btns
                    console.log('noteoff ', "NOTE ", msg.note, " VELOCITY ", msg.velocity, " CHANNEL ", msg.channel, "COLOR:" ,released[msg.note]); //DEBUG
                   // output.send('noteon', {
                   //     note: msg.note,
                   //     velocity: released[msg.note]
                  //  });
                }//else //side buttons
                   // output.send('noteon', {
                    //    note: msg.note,
                    //    velocity: "01"
                    });
           // ;
        }else{
            setTimeout(checkVariable, 250);
            socket.emit('erorr', {
                message: "Please set the input and output first."
            });
        }
    }
    checkVariable();
	*/
//});
