import {
  GoogleLogin,
  useGoogleLogin,
  useGoogleOneTapLogin,
} from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

const LoginWithGoogle = () => {
  const [user, setUser] = useState();
  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  const onSuccess = (response) => {
    console.log(response);
    const data = jwtDecode(response.credential);
    console.log(data);
    if (data.email) {
      alert("Login with google successfull");
      setUser();
    } else {
      alert("Login with google failed");
    }
  };

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      onSuccess(credentialResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.email) {
            alert("Login with google successfull");
            setUser();
          } else {
            alert("Login with google failed");
          }
        })
        .catch((err) => console.log(err), "================");
    }
  }, [user]);
  return (
    <div className="d-flex justify-content-between mt-4">
      <button className="btn btn-secondary " onClick={googleLogin}>
        <i class="bi bi-google"> </i>
      </button>
      <div>
        <GoogleLogin
          auto_select={true}
          onSuccess={(response) => onSuccess(response)}
        />
      </div>
    </div>
  );
};

export default LoginWithGoogle;
