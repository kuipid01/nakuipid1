/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";

import {
  AiOutlineFacebook,
  AiOutlineLock,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
import newRequest from "../../utils/newRequest";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    
    e.preventDefault();
    try {
      
      const res = await newRequest.post("/auth/login", {
        username,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data);
   
    }
  };
  return (
    <div className="login">
      <img className="imgBgOverlay" src="/assets/img8.png" alt="" />
      <div className="blackOverlay"></div>
      <Link to="/" style={{color:"white", textDecoration:'none'}}>
        {" "}
        <p className="logo">Nakuipid</p>
      </Link>

      <div className="lgincontainer">
        <div className="handle">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
           <span>#</span> 
        </div>
        <div className="handle">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <span>
            {" "}
            <AiOutlineLock />{" "}
          </span>
        </div>
        <div className="loginBtncontainer">
          <div className="check">
            <input type="checkbox" name="login" id="login" />
            <span>remember me</span>
          </div>
          <div className="textBtn" onClick={handleLogin}>Sign In</div>
        </div>
        <div className="options">
          <Link className="link" to="/forgotpasswrod">
            {" "}
            Forgot password?{" "}
          </Link>
          <hr />{" "}
          <Link to="/register" className="link">
            {" "}
            Sign Up{" "}
          </Link>
        </div>
        <p>OR</p>

        <div className="btns">
          <div>
            <AiOutlineFacebook />
          </div>
          <div>
            <AiOutlineGoogle />
          </div>
          <div>
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
