import React, { useEffect, useState } from "react";
import { handleSearch } from "./functions/allFunction";

const Search = ({ user, setUser, setActiveChat }) => {
  const [username, setUsername] = useState("");
  const [err, setErr] = useState(false);

  const handleChange = async (value) => {
    try {
      setUsername(value);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (username) {
      handleSearch({ username: username, setUser: setUser });
    } else {
      setUser();
    }
  }, [username]);
  const handleSelect = async (userid) => {
    try {
      setActiveChat(userid);
      setUser(null);
      setUsername("");
      setErr(false);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleSelect = async () => {
  //   const combinedId =
  //     currentUser.uid > user.uid
  //       ? currentUser.uid + user.uid
  //       : user.uid + currentUser.uid;
  //   try {
  //     const res = await getDoc(doc(db, "chats", combinedId));

  //     if (!res.exists()) {
  //       //create a chat in chats collection
  //       await setDoc(doc(db, "chats", combinedId), { messages: [] });

  //       //create user chats
  //       await updateDoc(doc(db, "userChats", currentUser.uid), {
  //         [combinedId + ".userInfo"]: {
  //           uid: user.uid,
  //           displayName: user.displayName,
  //           photoURL: user.photoURL,
  //         },
  //         [combinedId + ".date"]: serverTimestamp(),
  //       });

  //       await updateDoc(doc(db, "userChats", user.uid), {
  //         [combinedId + ".userInfo"]: {
  //           uid: currentUser.uid,
  //           displayName: currentUser.displayName,
  //           photoURL: currentUser.photoURL,
  //         },
  //         [combinedId + ".date"]: serverTimestamp(),
  //       });
  //     }
  //   } catch (err) {}

  //   // setUser(null);
  //   // setUsername("");
  // };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          // onKeyDown={handleKey}
          onChange={(e) => handleChange(e.target.value)}
          value={username}
        />
      </div>
      {/* {err && <span>User not found!</span>} */}
      {user &&
        user?.map((ele, index) => {
          return (
            <div
              key={index}
              className="userChat"
              onClick={() => handleSelect(ele.data()?.userid)}
            >
              <img src={ele.data()?.profilePic} alt={ele.data()?.profilePic} />
              <div className="userChatInfo">
                <span>{ele.data()?.name}</span>
              </div>
            </div>
          );
        })}
        {err & ''}
    </div>
  );
};

export default Search;
