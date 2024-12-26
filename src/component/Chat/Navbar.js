import React from "react";
import { useNavigate } from "react-router-dom";
import More from "../../assets/ChatImage/more.png";

const Navbar = ({ userData, setUserData, setActiveChat }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      localStorage.removeItem("mobile");
      localStorage.removeItem("userid");
      setUserData();
      navigate("/chat-login");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSwitch = async (page) => {
    try {
      setActiveChat(page);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar">
      <span className="logo">ChatAlong</span>
      <div className="user">
        <img src={userData?.profilePic} alt="" />
        <span>{userData?.name}</span>
        <div
          className="option"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={More} alt="" />
        </div>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <span
              className="dropdown-item"
              onClick={() => handleSwitch("Profile")}
            >
              Profile
            </span>
          </li>
          <li>
            <span
              className="dropdown-item"
              onClick={() => handleSwitch("Setting")}
            >
              Setting
            </span>
          </li>
          <li>
            <span className="dropdown-item" onClick={() => handleLogout()}>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
