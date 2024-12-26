import { FacebookAuthProvider, signInWithPopup } from "@firebase/auth";
import React from "react";
import { auth } from "../../../firebaseConfig";

const FirebseLoginFacebook = () => {
  const provider = new FacebookAuthProvider();
  //   const auth = getAuth();
  const facebookLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        console.log(result, "----------- result");
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token, "=================== token");
        const user = result.user;
        console.log(user, "-=-=-=--=-=-=--=-=--=-=-= user");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="mt-4">
      <button className="socialLoginFb" onClick={facebookLogin}>
        <h5 className="text-xl mt-2 text-white text-bold w-100 d-flex align-items-center justify-content-center">
          Sign up with Facebook
        </h5>
      </button>
    </div>
  );
};

export default FirebseLoginFacebook;
