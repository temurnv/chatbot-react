import ChatMessage from "./ChatMessage";

const ChatMessages = ({ messages }) => {
  const returnChat = messages.map((msg) => {
    return (
      <ChatMessage message={msg.message} sender={msg.sender} key={msg.id} />
    );
  });
  return <div>{returnChat}</div>;
};

export default ChatMessages;
