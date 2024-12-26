import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import Input from "./Input";
import Cam from "../../assets/ChatImage/cam.png";
import Add from "../../assets/ChatImage/add.png";
import More from "../../assets/ChatImage/more.png";
import {
  getFriendsData,
  getMessages,
  getUserData,
  sendMessage,
} from "./functions/allFunction";

const Chat = ({ activeChat }) => {
  const [friendsData, setFriendsData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [chatData, setChatData] = useState(null);
  const { messageSent, setMessageSent } = useState(false);
  const getMessage = async () => {
    try {
      const userid = await localStorage.getItem("userid");
      const chatId = userid + activeChat;
      getMessages({ chatId: chatId, setMessages: setChatData });
    } catch (error) {
      console.log(error);
    }
  };
  const onSend = async ({ chatId, mymsg }) => {
    try {
      const res = await sendMessage({
        chatId: chatId,
        mymsg: mymsg,
      });
      if (res) {
        getMessage();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFriendsData({ friendsId: activeChat, setFriendsData: setFriendsData });
    getUserData({ setUserData: setUserData });
  }, [activeChat]);
  // useEffect(() => {
  //   getMessage();
  // }, [messageSent]);
  useEffect(() => {
    getMessage();
  },[]);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{friendsData?.name}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages
        messages={chatData}
        userData={userData}
        friendsData={friendsData}
      />
      <Input
        userData={userData}
        friendsData={friendsData}
        sendMessage={onSend}
      />
    </div>
  );
};

export default Chat;
