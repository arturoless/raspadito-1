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
var port = process.env.port || 3001;
var HOST = ipv4['address'];
var net = require('net');

var client = new net.Socket();
client.connect(3000, '192.168.137.202', function() {
    console.log('Connected');
    io.on('connection',function(socket){
        socket.on('data',function(msg){
            socket.emit('data',msg)
            client.write(msg);
        });
     
    });
    
});


 
http.listen(port,function(){
console.log(HOST+':'+port)
});