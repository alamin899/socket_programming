const express = require('express'); //const express hosse instant
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(expressServer);


/** Start User Connection Disconnect On Socket For Every One */

/**

io.on('connection', function (socket) {
    console.log("New User Connected");

    /**============================After 5 second later event fire================================================== */

    /**
     setTimeout(function (){
        socket.send("This Is Test Message From (Server ---> Client)")
        console.log("send data")
    },5000)
     */

    /**============================Predefine Event Send================================================== */

    /**
     setInterval(function (){
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        var time = `${h}:${m}:${s}`
        socket.send(time)
    },1000)
     */

    /**============================Custom Event clock where in emit method================================================== */

    /**
     setInterval(function () {
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        var time = `${h}:${m}:${s}`
        socket.emit("clock", time)  //custom event  socket theke emit a 2 ti parameter jabe event name and value
    }, 1000)
     */


    /**============================Get data from client side using event================================================== */

    /**
     socket.on('message', function (msg) {
        console.log(msg)
    });

     //custom event
     socket.on('customEventMessage', function (msg) {
        console.log(msg)
    });
     */


    /** ====================================Socket Broadcasting Server to client ======================================= */
    /**
     io.sockets.emit("broadCastEvent","Hello! From Broadcasting")
     */


    /**============================Disconnect User================================================== */

    // socket.on('disconnect', function () {
    //     console.log("User Disconnected");
    // });

// });
/** End User Connection Disconnect On Socket For Every One */


/** =======================Namespace Broadcasting Server to client(connection er jonno alada alada group) ======================================= */

/**
let buyNsp = io.of("/buy")  //create namespace
buyNsp.on('connection', function (socket) {
    buyNsp.emit("buyNspEvent", "Hello! From Buy Namespace")
})

let sellNsp = io.of("/sell")  //create namespace
sellNsp.on('connection', function (socket) {
    sellNsp.emit("sellNspEvent", "Hello! From Sell Namespace")
})

 */

/** =====================Chatting App Using Socket====================================== */
io.on('connection', function (socket) {
    socket.on("msgSend",function (data){
        io.emit("chatShow",data)
    })
})


/** after index.js run index.html will execute */
app.get('/', function (req, resp) {
    resp.sendFile(__dirname + '/index.html')
})


/** after server run this console log will show */
expressServer.listen(3000, function () {
    console.log("express server running at 3000")
});