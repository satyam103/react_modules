import React from "react";

const Chats = ({ allUserData, setActiveChat }) => {
  const handleSelect = async (userid) => {
    try {
      setActiveChat(userid);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="chats">
      {allUserData?.map((ele, index) => {
        return (
          <div
            className="userChat"
            key={index}
            onClick={() => handleSelect(ele.data()?.userid)}
          >
            <img src={ele.data()?.profilePic} alt={ele.data()?.profilePic} />
            <div className="userChatInfo">
              <span>{ele.data()?.name}</span>
              {/* <p>{"kjkl"}</p> */}
            </div>
          </div>
        );
      })}
      {/* ))} */}
    </div>
  );
};

export default Chats;
