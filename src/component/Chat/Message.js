import React from "react";

const Message = ({ key, message, userData, friendsData }) => {
  return (
    <div
      key={key}
      className={` ${
        message?.user?._id === userData?.userid ? "owner" : "message"
      }`}
    >
      <div className="messageInfo">
        <img
          src={
            message?.user?._id === userData?.userid
              ? userData?.profilePic
              : friendsData?.profilePic
          }
          alt={
            message?.user?._id === userData?.userid
              ? userData?.profilePic
              : friendsData?.profilePic
          }
        />
        {/* <span>{message?.createdAt}</span> */}
      </div>
      <div className="messageContent">
        <p className="text-black abc">{message?.text}</p>
        {"message.img" && <img src={"message.img"} alt="" />}
      </div>
    </div>
  );
};

export default Message;
