import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import { auth, provider } from "./firebase";
import { useDataLayerValue } from "./DataLayer";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useDataLayerValue();
  const singIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("Login Success!", result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://apiway.ai/storage/softs/YisONm9JLhNxkKDlmWkpbKGrotSo13uAuZxZhked.jpg"
          alt=""
        />
        <h1>Sign in to Slack-clone</h1>
        <p>clever programmer</p>
        <Button onClick={singIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
