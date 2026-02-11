import { useState } from "react";
import "./lib/chatbot.js";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  function handleSend() {
    if (!text.trim()) return;
    onSend(text, 'user');
    const response = Chatbot.getResponse(text);
    onSend(response, 'robot');
    setText("");
    console.log(response);
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Send a message to ChatBot"
        size={30}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button>Send</button>
      <button onClick={handleSend}>testing button</button>
    </div>
  );
};

export default ChatInput;
