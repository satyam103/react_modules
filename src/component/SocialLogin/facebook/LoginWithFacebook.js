import React from "react";
import FacebookLoginWithButton from "react-facebook-login";

const LoginWithFacebook = () => {
  const responseFacebook = (response) => {
    // facebookLogin(response);
    console.log(response);
    if (response.userID) {
      alert(" Login with facebook Successfull");
    } else {
      alert(" Login failed");
    }
  };
  return (
    <div className="mt-4">
      <FacebookLoginWithButton
        appId="1035236857983487"
        // autoLoad={true}
        fields="name,email"
        callback={responseFacebook}
      />
    </div>
  );
};

export default LoginWithFacebook;
