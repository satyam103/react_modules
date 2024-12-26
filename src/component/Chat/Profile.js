import React, { useEffect, useState } from "react";
import { getUserData } from "./functions/allFunction";

const Profile = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    getUserData({ setUserData: setUser });
    // console.log(user)
  },[]);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Profile</span>
      </div>
      <div className="profile">
        <img src={user?.profilePic} alt="" />
        <h4 className="mt-2">{user?.name}</h4>
        <div className="w-100 mt-3 p-2 d-flex flex-column">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control p-4 pt-5 page-title"
              id="floatingInput"
              placeholder="name@example.com"
              disabled
              value={user?.about}
            />
            <label for="floatingInput">About</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control p-4 pt-5 page-title"
              id="floatingInput"
              disabled
              placeholder="name@example.com"
              value={user?.mobile}
            />
            <label for="floatingInput">Phone Number</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
