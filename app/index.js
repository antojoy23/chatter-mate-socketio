import express from 'express'
import { createServer } from 'http';
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/_health', (req, res) => {
    res.status(200).send('ok');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/out/app/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

server.listen(5000, () => {
    console.log('listening on *:5000');
});