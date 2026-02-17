import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";

const ChatMessages = ({ messages }) => {

  const ChatMessagesRef = useRef(null);

  useEffect(() => {
      const containerElem = ChatMessagesRef.current;

      if(containerElem) {
        containerElem.scrollTop = containerElem.scrollHeight;
      }

  }, [messages]);

  const returnChat = messages.map((msg) => {
    return (
      <ChatMessage message={msg.message} sender={msg.sender} key={msg.id} />
    );
  });
  return <div className="messages-container" ref={ChatMessagesRef} >{returnChat}</div>;
};

export default ChatMessages;
