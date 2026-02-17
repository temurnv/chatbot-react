import { useState } from "react";
import "./lib/chatbot.js";

const ChatInput = ({ onSend, isLoading, setIsLoading }) => {
  const [text, setText] = useState("");

  async function handleSend() {
    if (!text.trim() || isLoading) return;
    setIsLoading(true);

    onSend(text, "user");
    setText("");
    const loadingId = crypto.randomUUID();
    onSend("Loading...", "robot", loadingId);
    const response = await Chatbot.getResponseAsync(text);
    onSend(null, null, loadingId);
    onSend(response, "robot");
    setIsLoading(false);

    console.log(response);
  }

  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Send a message to ChatBot"
        size={30}
        value={text}
        disabled={isLoading}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleSend} disabled={isLoading}>Send</button>
    </div>
  );
};

export default ChatInput;
