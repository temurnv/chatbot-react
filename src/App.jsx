import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

const App = () => {
  const [messages, setMessage] = useState([
    { message: "hello chatbot", sender: "user", id: "1" },
    { message: "Hello! How can I help ya?", sender: "robot", id: "2" },
    {
      message: "can you get me todays date",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is September 27",
      sender: "robot",
      id: "id4",
    },
  ]);

  function sendMessage(text, user) {
    setMessage((prev) => [
      ...prev,
      { message: text, sender: user, id: crypto.randomUUID() },
    ]);
  }

  return (
    <>
      <ChatInput onSend={sendMessage} />
      <ChatMessages messages={messages} />
    </>
  );
};

export default App;
