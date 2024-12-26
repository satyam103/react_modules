import React, { useEffect, useState } from "react";
import Sidebar from "../component/Chat/Sidebar";
import Chat from "../component/Chat/Chat";
import { useNavigate } from "react-router-dom";
import Welcome from "../component/Chat/Welcome";
import Profile from "../component/Chat/Profile";

const ChatHome = () => {
  const navigate = useNavigate();
  const [activeChat, setActiveChat] = useState(null);
  useEffect(() => {
    const getSession = async () => {
      const userid = await localStorage.getItem("userid");
      if (!userid) {
        navigate("/chat-login");
      }
    };
    getSession();
  });
  return (
    <div className="chat-home">
      <div className="chat-container">
        <Sidebar setActiveChat={setActiveChat} />
        {activeChat === "Profile" ? (
          <Profile />
        ) : activeChat === null ? (
          <Welcome />
        ) : (
          <Chat activeChat={activeChat} />
        )}
      </div>
    </div>
  );
};

export default ChatHome;
