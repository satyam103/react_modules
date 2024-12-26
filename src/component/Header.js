import React from "react";
import logo from "../assets/image/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <img src={logo} alt="" />
          <h1 className="sitename">QuickStart</h1>
        </a>
        {location.pathname === "/chat-login" ? (
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Home
          </button>
        ) : location.pathname === "/" ? (
          <button
            className="btn btn-primary ps-3 pe-3"
            onClick={() => navigate("/chat-login")}
          >
            Chat
          </button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
