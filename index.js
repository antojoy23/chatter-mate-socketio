const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send({ status: "okay" });
});

server.listen(4000, () => {
    console.log('listening on *:4000');
});