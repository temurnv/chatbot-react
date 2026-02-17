import userImg from "./images/user.png";
import robotImg from "./images/robot.png";

const ChatMessage = ({ message, sender }) => {
  return (
      <div className={sender === "robot" ? "robot-message" : "user-message"}>
        {sender === "robot" && (
          <img src={robotImg} alt="robot image" width={50} />
        )}
        <p>{message}</p>
        {sender === "user" && <img src={userImg} alt="user image" width={50} />}
      </div>
  );
};

export default ChatMessage;
