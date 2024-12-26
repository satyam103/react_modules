import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./functions/allFunction";

const Login = () => {
  const [err, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    if (!e.target[0].value) {
      setError(true);
    } else {
      loginUser({ mobile: e.target[0].value, goToNext: goToNext });
    }
  };

  // const loginUser = ({ mobile }) => {
  //   firestore()
  //     .collection("users")
  //     .where("mobile", "==", mobile)
  //     .get()
  //     .then((res) => {
  //       if (res.docs[0]) {
  //         console.log("hello firestore");
  //         // goToNext(
  //         //   res.docs[0].data().mobile,
  //         //   res.docs[0].data().userid,
  //         //   res.docs[0].data().name
  //         // );
  //       } else {
  // const userid = uuid.v4();
  // firestore()
  //   .collection("users")
  //   .doc(userid)
  //   .set({
  //     name: name,
  //     mobile: mobile,
  //     userid: userid,
  //   })
  //   .then((res) => {
  //     goToNext(mobile, userid, name);
  //   })
  //   .catch((error) => console.log(error));
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };
  const goToNext = async ({ mobile, userid }) => {
    console.log(mobile, userid);
    localStorage.setItem("userid", userid);
    localStorage.setItem("mobile", mobile);
    navigate("/chat");
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChatAlong</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="number" placeholder="Phone Number" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p></p>
      </div>
    </div>
  );
};

export default Login;
