const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);

const PORT = 4000;
server.listen(PORT, () => {
  console.log("server listening to port 4000");
});
