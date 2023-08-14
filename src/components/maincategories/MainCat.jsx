/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./maincat.scss";
import { BiSolidHandDown } from "react-icons/bi";

const MainCat = () => {
  return (
    <div className="outercontainer">

  
    <div className="themaincatcontiner">
      <h1 className="title">Featured Categories</h1>
      <div className="container">
        <div className="box box1">
          <div className="inner">
            <h1>Men</h1> <BiSolidHandDown />
          </div>
          <img
            src="https://i.pinimg.com/236x/19/c9/b9/19c9b9341595a701765843c68ada53b9.jpg"
            alt=""
          />
        </div>
        <div className="box box2">
          <img
            src="https://i.pinimg.com/236x/33/49/93/334993a5713453c5f02f8d12884b8c6b.jpg"
            alt=""
          />
          <div className="inner">
            <h1>Shirt</h1> <BiSolidHandDown />
          </div>
        </div>
        <div className="box box3">
          <img
            src="https://i.pinimg.com/236x/cc/dc/da/ccdcda3e5c15c271298bf8f3d0c0b74a.jpg"
            alt=""
          />
          <div className="inner">
            <h1>Jerseys</h1> <BiSolidHandDown />
          </div>
        </div>
        <div className="box box4">
          <img
            src="https://i.pinimg.com/236x/e8/25/7a/e8257a05e8189be12853c4f20d5cd327.jpg"
            alt=""
          />
          <div className="inner">
            <h1> women</h1> <BiSolidHandDown />
          </div>
        </div>
        <div className="box box5">
          <img
            src="https://i.pinimg.com/236x/e8/a4/c7/e8a4c7326a1e5e480329e4cd24891cb1.jpg"
            alt=""
          />
          <div className="inner">
            <h1>Shoes</h1> <BiSolidHandDown />
          </div>
        </div>

        <div className="box box8">
          <img
            src="https://i.pinimg.com/236x/ce/30/c5/ce30c503ca4f711086f186b6f30a94e5.jpg"
            alt=""
          />
          <div className="inner">
            <h1>Tousers</h1> <BiSolidHandDown />
          </div>
        </div>
        <div className="box box9">
          <img
            src="https://i.pinimg.com/236x/0f/7d/84/0f7d842753632e436f450d70d4d2054f.jpg"
            alt=""
          />
          <div className="inner">
            <h1>Jewelleries</h1> <BiSolidHandDown />
          </div>
        </div>
      </div>
      <button>See all</button>
    </div>

    </div>
  );
};

export default MainCat;
