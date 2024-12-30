import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

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
