import React from "react";
import InstagramLogin from "react-instagram-oauth";

const LoginWithInstagram = () => {
  const authHandler = (err, data) => {
    console.log(data);
  };
  return (
    <div className="mt-4">
      <InstagramLogin
        authCallback={authHandler}
        appId={"1057407375982428"}
        appSecret={"2a73757396e686692ac87a51b3f761e2"}
        redirectUri={"https://quickstart-9ff13.firebaseapp.com/__/auth/handler"}
        className="w-100"
      />
    </div>
  );
};

export default LoginWithInstagram;
