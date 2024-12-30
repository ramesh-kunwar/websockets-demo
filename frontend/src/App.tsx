import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  function sendMessage() {
    console.log("Message Sent");
    if (!socket) return;

    const message = inputRef.current?.value;
    // @ts-expect-ignore
    // @ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    //
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (e) => {
      alert(e.data);
    };

    ws.onerror = () => {
      //
    };

    ws.onopen = () => {
      //
    };

    ws.onclose = () => {
      //
    };
  }, []);
  return (
    <>
      <h1>Web Sockets Demo</h1>
      <input type="text" placeholder="Send A Message...." ref={inputRef} />
      <button onClick={sendMessage}>Send</button>
    </>
  );
}

export default App;
