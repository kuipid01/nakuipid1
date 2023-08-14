/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import {
  AiOutlinePhone,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillContainer,
  AiOutlineDown,
  AiOutlineClose,
} from "react-icons/ai";
import { CartContext } from "../../contexts/CartContext";
import { BsHandbag } from "react-icons/bs";
import { useTransition, animated, config } from "react-spring";
import "animate.css/animate.min.css";

const Navbar = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [navmobileOpen, setNavmobileOpen] = useState(false);
useEffect(() => {
  console.log('yes')
}, [currentUser])
  const toggleComponent = () => {
    setNavmobileOpen((prevState) => !prevState);
  };
  const { cart, setCart } = useContext(CartContext);
  const transitions = useTransition(navmobileOpen, {
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(-20px)" },
    config: config.slow,
  });
  return (
    <div className="navContainer">
      <Link className="navlink" to="/">
        <h1 className="logo">NaKuipid</h1>
      </Link>

      <ul className="navlist">
        <Link className="link" to="shop">
          <li>SHOP</li>
        </Link>

       

        {currentUser !== null ? (
          <Link to={`/profile/userid/${currentUser._id}`}>
            {" "}
            <img
              src={currentUser.userImage || "/assets/dummyUser.png"}
              alt=""
            />{" "}
          </Link>
        ) : (
          <Link className="link" to={"/login"}>
            <li>LOG IN</li>
          </Link>
        )}

        <li className="phone">
          {" "}
          <AiOutlinePhone /> +234-915-701-666-9
        </li>
      </ul>
      <div className="loginContainer">
        <div className="language">
          <div className="naira">
            <span>Naira</span> <AiOutlineDown className="icon" />
          </div>
          <div className="naira">
            <span>English</span> <AiOutlineDown className="icon" />
          </div>
        </div>
        <div className="search">
          <AiOutlineSearch className="searchIcon" />
          <Link to={"/cart"} className="link">
            <div className="cart">
              <span>{cart.length}</span>
              <BsHandbag className="shopIcon" />
            </div>
          </Link>
        </div>
      </div>

      <div className="menu">
        {navmobileOpen ? (
          <AiOutlineClose onClick={() => setNavmobileOpen(false)} />
        ) : (
          <AiOutlineMenu onClick={() => setNavmobileOpen(true)} />
        )}
      </div>

      {/* navmobile */}
      {transitions(
        (styles, item) =>
          item && (
            <animated.div className="navmobile" style={styles}>
              <ul className="navlist">
              <Link className="link" to="shop">
                <li  onClick={() => setNavmobileOpen(false)}>SHOP</li>
               </Link>
              

                {currentUser ? (
                   <Link  onClick={() => setNavmobileOpen(false)} to={`/profile/userid/${currentUser._id}`}>
                  <img
                    src={currentUser.userImage || "/assets/dummyUser.png"}
                    className="userImage"
                    alt=""
                  />
                  </Link>
                ) : (
                  <Link onClick={() => setNavmobileOpen(false)} className="link" to={"/login"}>
                    <li>LOG IN</li>
                  </Link>
                )}
                <li  onClick={() => setNavmobileOpen(false)} className="phone">
                  <AiOutlinePhone /> 09157016669
                </li>
              </ul>
              <div className="loginContainer">
                <div className="language">
                  <div className="naira">
                    <span>Naira</span> <AiOutlineDown className="icon" />
                  </div>
                  <div className="naira">
                    <span>English</span> <AiOutlineDown className="icon" />
                  </div>
                </div>
                <Link  onClick={() => setNavmobileOpen(false)} to={"/cart"} className="link">
                <div className="search">
                  <AiOutlineSearch className="searchIcon" />
                  
                  <div className="cart">
                    <span>3</span>
                    <BsHandbag className="shopIcon" />
                  </div>
                 
                </div>
                 </Link>
              </div>
            </animated.div>
          )
      )}

      {/* end navmobile */}
    </div>
  );
};

export default Navbar;
