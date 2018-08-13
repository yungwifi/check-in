const express = require('express')
const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

server = app.listen(3001)

const io = require('socket.io')(server)

io.on('connection', (socket) => {

    socket.username = "Anonymous"

    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    socket.on('send:coords', (data) => {
        socket.broadcast.emit('load:coords', data);
    })

    console.log("New User Connected", socket.users)

    socket.on('new_message', (data) => {
        io.sockets.emit('new_message', { message: data.message, username: socket.username })
    })
})

