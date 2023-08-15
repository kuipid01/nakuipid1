/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./reg.scss";

import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import axios from "axios";
import newRequest from "../../utils/newRequest";
import upload from "../../utils/upload";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../components/Loader/Loader";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [userImage,setUserImage] = useState(null);
   const [loading, setLoading] = useState(false);
const [inputLabel, setInputLabel] = useState(false)
  const handleSignUp = async () => {
    // Handle sign-up logic here
   
    const url = await upload(userImage)
    try {
         setLoading(true)
      await newRequest.post("/auth/register",{
        email,username,password,isSeller,userImage:url,
      })
     navigate("/login")
     toast.success('Registration Succesful!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
     setLoading(false)
    } catch (error) {
      toast.error('An error occured fill in all input fields and try again!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        setLoading(false)
    }
  };
  const handleLabel =  () => {
setInputLabel(true)
  }
const handleImage = () => {

}
  return (
    <div className="registerContainer">
         <ToastContainer />
      <img src="/assets/registerBg.jpg" alt="" />
      <div className="overlay"></div>
      <div className="leftContainer">
        <Link to='/'  className="link">  <h1 style={{color:"white"}} className="logo">Nakuipid</h1></Link>
      
        <div className="text">
          <h3>
            Don&lsquo;t have an <br /> account?
          </h3>
          <p>Register to access all our features in just two steps</p>
          <div className="icons">
            <AiOutlineFacebook />
            <AiOutlineTwitter />
            <AiFillInstagram />
          </div>
        </div>
      </div>

      <div className="rightContainer">
        <div className="blur"></div>
        <div className="registration-page">
          <h1 className="registration-title">Sign Up</h1>
          {
      loading?<Loader/>:   <form className="registration-form">
          <div className="form-group">
      <label className={`placeholder ${email ? 'active' : ''}`}> Email: </label>
      <input
        type="email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label className={`placeholder ${username ? 'active' : ''}`}> username: </label>
      <input
        type="username"
        className="input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
            <div className="form-group">
              <label className={`placeholder ${password ? 'active' : ''}`}>Password:</label>
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className={`placeholder ${confirmPassword ? 'active' : ''}`}>Confirm Password:</label>
              <input
                type="password"
                className="input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className={`placeholder1 right ${userImage ? 'active' : ''}`}>Upload Image</label>
              <input
                type="file"
                className="input"
               
                onChange={(e) => setUserImage(e.target.files[0])}
              />
            </div>
            <div className="form-group-left">
            <input
                  type="checkbox"
                  className="checkbox"
                  checked={isSeller}
                  onChange={() => setIsSeller(!isSeller)}
                />
              <label className="placeholder">
             Check box if you are a seller
              </label>
              
              
            </div>
            <p  className="login-link">
            Already have an account? <Link className="link" to="/login">Log in</Link>
          </p>
            <button
              type="button"
              className="sign-up-button"
              onClick={handleSignUp}
              disabled={ password !== confirmPassword}
            >
              Sign Up
            </button>

          </form>
       }
        </div>
      </div>
    </div>
  );
};

export default Register;
