import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { localAxios } from "../../axios/api";
import GitHubLogin from "react-github-login";

const LoginWithGithub = () => {
  const navigate = useNavigate();
  const isFirstCall = useRef(true);

  const githubLogin = async () => {
    // debugger
    try {
      window.location.assign(
        `https://github.com/login/oauth/authorize?scope=user&client_id=${"Ov23liwJmNlI0VzUv3LS"}&redirect_uri=${"http://localhost:3000/"}`
      );
    } catch (error) {
      console.log(error, "error while logging with github");
    }
  };

  const githubLogin1 = async (codeParams) => {
    // debugger
    try {
      const response = await localAxios.post("/githubLogin", {
        code: codeParams,
      });
      console.log(response);
      if (response.data.foundUser) {
        alert("Login with github successfull");
        // navigate("/");
      } else {
        alert("Login with github failed");
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // debugger
    const queryString = window.location.search;
    const queryParams = new URLSearchParams(queryString);
    const codeParams = queryParams.get("code");
    console.log(codeParams);
    if (codeParams && isFirstCall.current) {
      isFirstCall.current = false; // Mark the first call as done

      githubLogin1(codeParams);
    }
  }, []);

  // const onSuccess = async (code) => {
  //   const params = `?client_secret=${"b5cdb2e5e43727d14dbb169ff0aeeab26ef0daee"}&client_id=${"Ov23liwJmNlI0VzUv3LS"}&code=${code}`;
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   let data = await fetch(
  //     "https://github.com/login/oauth/access_token" + params,
  //     options
  //   );
  //   data = await data.json();

  //   if (data.access_token) {
  //     const option2 = {
  //       method: "GET",
  //       headers: {
  //         origin: "http://localhost:3000",
  //         "Access-Control-Allow-Origin": "http://localhost:3000",
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + data.access_token,
  //       },
  //     };
  //     let user = await fetch("https://api.github.com/user", option2);
  //     user = await user.json();
  //     console.log(user);
  //     //   if (user) {
  //     //     res.json({ access_token: data.access_token, foundUser: user });
  //     //   } else {
  //     //     res.status(210).json(user);
  //     //   }
  //   } else {
  //     console.log(data);
  //     //   res.status(210).json(data);
  //   }
  // };
  return (
    <div className="d-flex justify-content-between mt-4">
      <button className="btn btn-secondary" onClick={githubLogin}>
        <i class="bi bi-github"></i>
      </button>
      <GitHubLogin
        clientId={"Ov23liwJmNlI0VzUv3LS"}
        scope={"user"}
        className={"socialLoginFull"}
        redirectUri={"http://localhost:3000/"}
        onSuccess={(response) => githubLogin1(response.code)}
      />
    </div>
  );
};

export default LoginWithGithub;
