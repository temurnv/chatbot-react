import userImg from "./images/user.png";
import robotImg from "./images/robot.png";

const ChatMessage = ({ message, sender }) => {
  return (
    <div>
      {sender === "robot" && (
        <img src={robotImg} alt="robot image" width={50} />
      )}
      {message}
      {sender === "user" && <img src={userImg} alt="user image" width={50} />}
    </div>
  );
};

export default ChatMessage;
