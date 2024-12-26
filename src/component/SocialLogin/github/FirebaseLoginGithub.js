import React from "react";
import { signInWithPopup, GithubAuthProvider } from "@firebase/auth";
import { auth } from "../../../firebaseConfig";

const FirebaseLoginGithub = () => {
  const provider = new GithubAuthProvider();
  //   const auth = getAuth();
  const siupWithGithub = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        console.log(result, "----------- result");
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token, "=================== token");
        // The signed-in user info.
        const user = result.user;
        console.log(user, "-=-=-=--=-=-=--=-=--=-=-= user");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="mt-4">
      <button className="socialLoginFull-lg" onClick={siupWithGithub}>
        <h5 className="text-xl mt-2 text-white text-bold w-100 d-flex align-items-center justify-content-center">
          Sign up with Github
        </h5>
      </button>
    </div>
  );
};

export default FirebaseLoginGithub;
