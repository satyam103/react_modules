import { signInWithPopup, TwitterAuthProvider } from "@firebase/auth";
import React from "react";
import { auth } from "../../../firebaseConfig";

const FirebaseLoginTwitter = () => {
  const provider = new TwitterAuthProvider();
  //   const auth = getAuth();
  const siupWithTwitter = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result, "----------- result");
        const credential = TwitterAuthProvider.credentialFromResult(result);
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
        // const credential = TwitterAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div className="mt-4">
      <button className="btn btn-primary w-100 " onClick={siupWithTwitter}>
        <h5 className="text-xl mt-2 text-white text-bold w-100 d-flex align-items-center justify-content-center">
          Sign up with Twitter
        </h5>
      </button>
    </div>
  );
};

export default FirebaseLoginTwitter;
