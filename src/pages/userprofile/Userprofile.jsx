/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./userprofile.scss";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMessage,
  AiOutlineMessage,
  AiOutlineStar,
  AiFillStar,
  AiFillMoneyCollect,
  AiOutlineTransaction,
  AiOutlineCheck,
  AiFillDashboard,
  AiOutlineLike,
  AiFillCompass,
  AiOutlineClose,
} from "react-icons/ai";
import Card from "../../components/card/Card";
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import AddProductForm from "../../components/form/AddProductForm";
import { useTransition, animated, config } from 'react-spring';
const Userprofile = () => {
   const [formOpen, setFormOpen] = useState(false);
  const transitions = useTransition(formOpen, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
  enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
    config: config.slow,
  });
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
   const { id } = useParams();
   const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['productsByUserId', id], // Descriptive string + user ID
    queryFn: () =>
      newRequest.get(`/products?userId=${id}`).then((res) => {
        return res.data;
      }),
  });
  console.log(data);
  
  const { isLoading: isLoadingUser, error: userError, data: userData } = useQuery({
    queryKey: ['userData', id], // Descriptive string + user ID
    queryFn: () =>
      newRequest.get(`/users/${id}`).then((res) => {
        return res.data;
      }),
  });
  

  return (
    <div className="profileContainer">
       
    <nav>
        <div className="imageContainer">
          <div>
            <img className="profileImage" src={userData?.userImage} alt="" />
            <div className="stars">
              <h1 className="">
                4.5 <AiFillStar />{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="profileDescription">
          <div className="topContainer">
            <div className="name">
              <h1 className="nametext"> {userData?.username}</h1>
              <p className="location">
                {" "}
                <AiFillCompass /> {userData?.username}
              </p>
            
              <p className="shortDescription">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
                nihil beatae cumque nostrum libero veritatis officiis atque
                ehenderit, inventore suscipit.
              </p>
            </div>
            <div className="icons">
              <div className="icon">
                <AiOutlineFacebook />
                <AiOutlineTwitter />
                <AiFillInstagram />
              </div>
              <div className="msgContainer">
              <div className="message">
                <AiOutlineMessage /> <span>Send Message</span>
              </div>
           { currentUser?.isSeller?  <div onClick={() => setFormOpen(!formOpen)} className="message">
                <AiOutlineMessage /> <span>Add Product</span>
              </div> : ''}
              </div>
             
            </div>
          </div>
          <div className="bottomContainer">
            <div className="sales">
              <h1>
                {" "}
                <AiOutlineCheck /> 300+
              </h1>
              <span>Sales</span>
            </div>
            <div className="sales">
              <h1>
                {" "}
                <AiFillDashboard /> 300+
              </h1>
              <span>Sales</span>
            </div>
            <div className="sales">
              <h1>
                {" "}
                <AiOutlineLike /> 13000+
              </h1>
              <span>Likes</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="containerProduct">
        {isLoading
          ? "Loading"
          : error
          ? "An Error Occured "
          : data.map((product) => (
            
                <Card  key={product._id} product={product} />
            
            ))}
      </div> 
      { formOpen &&  <div className="formContaineruserprofile">
       <AiOutlineClose onClick={() => setFormOpen(false)} className="closeIcon" />
        <div className="forminner">
        {transitions(
        (styles, item) =>
          item && (
         <animated.div style={styles}>
       <AddProductForm/>
      </animated.div>
      )
     )} 
        </div>
 
       </div>
      }
    </div>
  );
};

export default Userprofile;
