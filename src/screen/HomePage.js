import React from "react";
import LoginWithFacebook from "../component/SocialLogin/facebook/LoginWithFacebook";
import LoginWithGoogle from "../component/SocialLogin/google/LoginWithGoogle";
import LoginWithGithub from "../component/SocialLogin/github/LoginWithGithub";
import FirebaseLoginGithub from "../component/SocialLogin/github/FirebaseLoginGithub";
import FirebaseLoginTwitter from "../component/SocialLogin/twitter/FirebaseLoginTwitter";
import LoginWithLinkedin from "../component/SocialLogin/linkedIn/LoginWithLinkedin";
import LoginWithInstagram from "../component/SocialLogin/instagram/LoginWithInstagram";
// import LoginWithApple from "../component/SocialLogin/apple/LoginWithApple";
import FirebseLoginFacebook from "../component/SocialLogin/facebook/FirebseLoginFacebook";
// import FirebaseLoginApple from "../component/SocialLogin/apple/FirebaseLoginApple";
import ItemCard from "../component/ItemCard";

const HomePage = () => {
  return (
    <div className="container d-flex justify-content-center h-100 w-100 ">
      <div className="d-flex ps-4 pe-4">
        <div className="abc ps-4 pe-4">
          <h4>Social Login Platforms</h4>
          <hr />
          <LoginWithFacebook />
          <FirebseLoginFacebook />
          <hr />
          <LoginWithGoogle />
          <hr />
          {/* <LoginWithApple /> */}
          {/* <FirebaseLoginApple /> */}
          {/* <hr /> */}
          <LoginWithGithub />
          <FirebaseLoginGithub />
          <hr />
          <FirebaseLoginTwitter />
          <hr />
          <LoginWithLinkedin />
          <hr />
          <LoginWithInstagram />
          <hr />
        </div>
        <div className="ps-4 pe-4">
          <h4>Payment Gateways</h4>
          <hr />
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
