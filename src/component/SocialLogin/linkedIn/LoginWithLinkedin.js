import React from "react";
import { LinkedIn, useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

const LoginWithLinkedin = () => {
  const { linkedInLogin } = useLinkedIn({
    clientId: "78cv2ytgycgpe0",
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <div className="mt-4">
      <LinkedIn
        clientId="78cv2ytgycgpe0"
        redirectUri={`${window.location.origin}/linkedin`}
        onSuccess={(code) => {
          console.log(code);
        }}
        onError={(error) => {
          console.log(error);
        }}
      >
        {({ linkedInLogin }) => (
          <img
            onClick={linkedInLogin}
            src={linkedin}
            alt="Sign in with Linked In"
            style={{ maxWidth: "270px", cursor: "pointer" }}
          />
        )}
      </LinkedIn>
    </div>
  );
};

export default LoginWithLinkedin;
