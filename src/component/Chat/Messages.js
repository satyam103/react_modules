import React from "react";
import Message from "./Message";
const Messages = ({ messages, userData, friendsData }) => {
  return (
    <div className="messages">
      {messages?.map((message, index) => (
        <Message
          key={index}
          message={message}
          userData={userData}
          friendsData={friendsData}
        />
      ))}
    </div>
  );
};

export default Messages;
