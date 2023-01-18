"use strict";

const express = require("express");
const http = require("http");
const {
   Server
} = require("socket.io");

const app = express();
const server = http.createServer(app);
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aXRsZSI6IkhpbGxlbCBGcm9udGVuZC1Qcm8ifQ.19_0-wYdfdgIWA6NVhnR0SKhqT7ZYwMF-Z908v-O";
const io = new Server(server, {
   allowedHeaders: ["x-hillel-token"],
   credentials: true,
   allowRequest: (req, callback) => {
      const noAuth = req.headers["x-hillel-token"] === TOKEN;
      callback(null, noAuth);
   },
   cors: {
      origin: "*",
      methods: ["GET", "POST"]
   }
});
const messages = [];

io.on("connection", (socket) => {
   // console.log(socket);
   const userId = socket.client.id;
   socket.emit('messages_list', messages);
   socket.on('messages_list_update', (obj) => {
      let messageObj = {
         ...obj,
         createdAt: new Date(),
         userId,
      };
      messages.push(messageObj);
      socket.emit("message_added", messageObj);
   });
});

server.listen(4000, () => {
   console.log("server listening 4000 port");
});