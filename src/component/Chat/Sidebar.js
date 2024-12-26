import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import { getAllUserData, getUserData } from "./functions/allFunction";

const Sidebar = ({ setActiveChat }) => {
  const [userData, setUserData] = useState();
  const [user, setUser] = useState(null);
  const [allUserData, setAllUserData] = useState();

  useEffect(() => {
    getUserData({ setUserData });
    getAllUserData({ setAllUserData });
  }, []);
  return (
    <div className="sidebar">
      <Navbar
        userData={userData}
        setUserData={setUserData}
        setActiveChat={setActiveChat}
      />
      <Search user={user} setUser={setUser} setActiveChat={setActiveChat} />
      {!user && (
        <Chats allUserData={allUserData} setActiveChat={setActiveChat} />
      )}
    </div>
  );
};

export default Sidebar;
