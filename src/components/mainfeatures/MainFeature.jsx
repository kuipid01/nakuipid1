/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./mainfeat.scss";
import { BiSolidHandDown } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const MainFeature = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['users'], // Change the query key to 'users'
    queryFn: () =>
      newRequest.get(`/users?featured=true`).then((res) => {
        return res.data;
      }),
  });

  if(isLoading) return <Loader/>
 if(data)  return (
    <div className="thecontiner">
      <h1 className="title">Featured Designers</h1>
    <div className="MainFeatureContainer">
   
      <div className="box box1">
        <img
          src= 'https://i.pinimg.com/236x/8b/22/b7/8b22b7b0b2535d3efbf35fdaa7c44649.jpg'
          alt=""
        />
               <div className="textContainer">
          <div className="inner">
          <h1>{data[0]?.username}</h1> <BiSolidHandDown />
          </div>
          <div className="profile">
          <Link to={`/profile/userid/${data[0]?._id}`}  style={{display:"flex", gap:"10px", alignItems:"center", textDecoration:'none',color:"white"}}>
            <img
                src={data[0]?.userImage}
              alt=""
            />
            <h1>{data[0]?.username}</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="box box2">
        <img
          src="https://i.pinimg.com/236x/3d/89/a2/3d89a2d16e8090459f8d5254eb4a048c.jpg"
          alt=""
        />
        <div className="textContainer">
          <div className="inner">
          <h1>{data[1]?.username}</h1> <BiSolidHandDown />
          </div>
          <div className="profile">
          <Link to={`/profile/userid/${data[1]?._id}`} style={{display:"flex", gap:"10px", alignItems:"center", textDecoration:'none',color:"white"}} className="linkcard">
            <img
                src={data[1]?.userImage}
              alt=""
            />
            <h1>{data[1]?.username}</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="box box3">
        <img
          src="https://i.pinimg.com/236x/12/17/10/121710ee8cabf07ab525249e493a678b.jpg"
          alt=""
        />
        <div className="textContainer">
          <div className="inner">
          <h1>{data[2]?.username}</h1> <BiSolidHandDown />
          </div>
          <div className="profile">
          <Link to={`/profile/userid/${data[2]?._id}`} style={{display:"flex", gap:"10px", alignItems:"center", textDecoration:'none',color:"white"}} className="linkcard">
            <img
                src={data[2]?.userImage}
              alt=""
            />
            <h1>{data[2]?.username}</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="box box4">
        <img
          src="https://i.pinimg.com/236x/8b/22/b7/8b22b7b0b2535d3efbf35fdaa7c44649.jpg"
          alt=""
        />
       <div className="textContainer">
          <div className="inner">
          <h1>{data[3]?.username}</h1> <BiSolidHandDown />
          </div>
          <div className="profile">
          <Link to={`/profile/userid/${data[3]?._id}`} style={{display:"flex", gap:"10px", alignItems:"center", textDecoration:'none',color:"white"}} className="linkcard">
          
            <img
                src={data[3]?.userImage}
              alt=""
            />
            <h1>{data[3]?.username}</h1>
            </Link>
          </div>
        </div>
      </div>

  
    </div>
    </div>
  );
};

export default MainFeature;
