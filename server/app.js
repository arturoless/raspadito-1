var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});
var express = require("express");
var app = new express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
const os = require('os')
var interfaces = os.networkInterfaces()
var wifi = interfaces['eth0']
if(wifi==null){
    wifi = interfaces['Wi-Fi']
    var ipv4 = wifi[1]
}
else{
    var ipv4 = wifi[0]
}
var PORT = process.env.PORT || 3001;
var HOST = ipv4['address']
io.on('connection',function(socket){
    socket.on('data',function(text){
        socket.emit('data',text);  
    });
 
});
 
http.listen(PORT,function(){
console.log(HOST+':'+PORT)


board.on("ready", function() {
    // var led = new five.Led("P1-13");
    // led.blink();
    var lcd = new five.LCD({
        controller: "JHD1313M1"
      });
      lcd.useChar("heart");
      lcd.cursor(0, 0).print("hello :heart:");
      lcd.blink();
      lcd.cursor(1, 0).print("Blinking? ")
  });
});