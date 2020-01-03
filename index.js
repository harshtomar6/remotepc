// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const rt = require('./socket');

// Define PORT
const port = process.env.PORT || 5087;

// Log requests
app.use(logger('dev'));

// Use Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/public/index.html');
});

// Initialize Socket.io
io.on('connection', socket => {
  rt(io, socket);
});

http.listen(port, () => {
  console.log('Server is LIVE at port :'+port);
});