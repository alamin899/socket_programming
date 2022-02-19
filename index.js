const express = require('express'); //const express hosse instant
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(expressServer);


/** Start User Connection Disconnect On Socket */
io.on('connection', function (socket) {
    console.log("New User Connected");

    /** After 5 second later event fire
     setTimeout(function (){
        socket.send("This Is Test Message From (Server ---> Client)")
        console.log("send data")
    },5000)
     */

    /** Predefine Event Send
     setInterval(function (){
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        var time = `${h}:${m}:${s}`
        socket.send(time)
    },1000)
     */

    /** Custom Event clock where in emit method */
    setInterval(function () {
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        var time = `${h}:${m}:${s}`
        socket.emit("clock", time)  //custom event  socket theke emit a 2 ti parameter jabe event name and value
    }, 1000)

    socket.on('disconnect', function () {
        console.log("User Disconnected");
    });

});
/** End User Connection Disconnect On Socket */


/** after index.js run index.html will execute */
app.get('/', function (req, resp) {
    resp.sendFile(__dirname + '/index.html')
})


/** after server run this console log will show */
expressServer.listen(3000, function () {
    console.log("express server running at 3000")
});