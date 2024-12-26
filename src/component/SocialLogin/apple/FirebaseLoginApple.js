import { OAuthProvider, signInWithPopup } from "@firebase/auth";
import React from "react";
import { auth } from "../../../firebaseConfig";
import AppleLogin from "react-apple-login";

const FirebaseLoginApple = () => {
  const provider = new OAuthProvider();
  //   const auth = getAuth();
  const appleResponse = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result, "----------- result");
        const credential = OAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token, "=================== token");
        const user = result.user;
        console.log(user, "-=-=-=--=-=-=--=-=--=-=-= user");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = OAuthProvider.credentialFromError(error);
      });
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

export default FirebaseLoginApple;
