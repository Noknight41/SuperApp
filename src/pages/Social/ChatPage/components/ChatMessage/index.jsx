import PropTypes from "prop-types";
import React from "react";

function ChatMessage(props) {
  const {
    auth,
    message: { text, uid, photoURL },
  } = props;

  return (
    <div
      className={`flex items-center ${
        uid === auth.currentUser.uid ? "flex-row-reverse" : ""
      }`}
    >
      <img
        className="w-10 h-10 rounded-[50%] my-[2px] mx-[5px]"
        alt="Not Found"
        src={
          photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
        }
        referrerpolicy="no-referrer"
      />
      <p
        className={`mb-3 leading-6 relative text-center max-w-[250px] break-words rounded-[25px] px-[20px] py-[10px] ${
          uid === auth.currentUser.uid
            ? " text-white bg-[#0b93f6] "
            : " text-black bg-white"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

ChatMessage.propTypes = {
  auth: PropTypes.func.isRequired,
  message: PropTypes.func.isRequired,
};

export default ChatMessage;
