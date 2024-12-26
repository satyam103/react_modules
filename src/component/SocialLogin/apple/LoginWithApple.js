import axios from "axios";
import React from "react";
import AppleLogin from "react-apple-login";

const LoginWithApple = () => {
  const appleResponse = (response) => {
    if (!response.error) {
      axios
        .post("/appleLogin", response)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="mt-4">
      <AppleLogin
        clientId="com.react.apple.login"
        redirectURI="http://localhost:3000"
        usePopup={true}
        callback={(response) => appleResponse(response)} // Catch the response
        scope="email name"
        responseMode="query"
        // render={(
        //   renderProps //Custom Apple Sign in Button
        // ) => (
        //   <button
        //     onClick={renderProps.onClick}
        //     style={{
        //       backgroundColor: "white",
        //       padding: 10,
        //       border: "1px solid black",
        //       fontFamily: "none",
        //       lineHeight: "25px",
        //       fontSize: "25px",
        //     }}
        //   >
        //     <i className="fa fa-apple px-2 "></i>
        //     Continue with Apple
        //   </button>
        // )}
      />
    </div>
  );
};

export default LoginWithApple;
