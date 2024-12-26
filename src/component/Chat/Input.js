import React, { useState } from "react";
import Attach from "../../assets/ChatImage/attach.png";
import Img from "../../assets/ChatImage/img.png";
import { v4 as uuidv4 } from "uuid";
// import { sendMessage } from "./functions/allFunction";

const Input = ({ userData, friendsData, sendMessage }) => {
  const [text, setText] = useState("");
  const handleSend = async () => {
    try {
      let mymsg = {
        _id: uuidv4(),
        text: text,
        sendBy: userData.userid,
        sendTo: friendsData.userid,
        createdAt: Date.now(),
        sent: true,
        user: {
          _id: userData.userid,
        },
      };
      sendMessage({
        chatId: userData.userid + friendsData.userid,
        mymsg: mymsg,
      });
      setText("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          //   onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
