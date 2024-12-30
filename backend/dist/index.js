"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// event handler
wss.on("connection", (socket) => {
    console.log("User connected");
    // when the socket server sends a message
    socket.on("message", (e) => {
        console.log(e.toString());
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
