import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// event handler
wss.on("connection", (socket) => {
  console.log("User connected");
  setInterval(() => {
    socket.send(`Current  price of solana is $ ${100 + Math.random() * 10}`);
  }, 1000);
  // when the socket server sends a message
  socket.on("message", (e) => {
    console.log(e.toString());
  });
});
