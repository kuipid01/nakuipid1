/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./product.scss";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { sampleEcommerceProducts } from "../../constants";
import Card from "../../components/card/Card";

import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { CartContext } from "../../contexts/CartContext"
import { motion } from "framer-motion";
const Product = () => {

  const { id } = useParams();
  const [toBedisplayed, setToBedisplayed] = useState(0);
  // Fetch the main product data
  const {  isLoading, error,data: mainProductData } = useQuery({
    queryKey: ["product", id],
    queryFn: () =>
      newRequest.get(`/products/single/${id}`).then((res) => res.data),
  });
  const handleIncreaseCartQty = (product) => {
    console.log("clicked");
    setCart((prevState) =>
      prevState.map((item) =>
        item._id === product._id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };
  const handleDecreaseCartQty = (product) => {
    console.log("clicked");
    setCart((prevState) =>
      prevState.map((item) =>
        item._id === product._id
          ? { ...item, qty: item.qty === 1 ? item.qty : item.qty - 1 }
          : item
      )
    );
  };
  // Fetch related products with the same category as the main product
  const { data: relatedProductsData } = useQuery({
    queryKey: ["relatedProducts", mainProductData?.category], // Use category as part of the query key
    queryFn: () =>
      newRequest
        .get(`/products?category=${mainProductData?.category}`)
        .then((res) => res.data),
  });
  const {cart,setCart} = useContext(CartContext)
 
const handleCartAdd  = (product) => {
const existingItem = cart.find((item) => item._id === product._id)
if (existingItem) {
  setCart(prevState => prevState.map((item) =>
  item._id===product._id ? {...item, qty : item.qty+1 } : item
  ))
}

else{
  setCart([{...product,qty:1}, ...cart])
}
}
  const thistProductQty = cart.map(item => {
    if (item._id===mainProductData._id) {
      if (item.qty) {
        return item.qty
      }
      else return null 
    }
   else return null
  })
 
  if (isLoading)  return <Loader/>
  return (
    <div className="singleProductContainer">
      <div className="containerdisplay">
        <div className="leftcontainer">
        <motion.div
            className="mainImage"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            key={mainProductData?.images[toBedisplayed]}
          >
          
            <img src={mainProductData?.images[toBedisplayed]} alt="" />
          </motion.div>
        </div>
        <div className="rightContainer">
          <h1 className="title">{mainProductData?.title}</h1>
          <span className="price">#{mainProductData?.price}</span>
          <hr />
          <p className="description">{mainProductData?.description}</p>
          <div className="cart">
            <span className="productspan">  
            <p
            className="qty"
            onClick={() => handleDecreaseCartQty(mainProductData)}
          >
            -
           
          </p>{" "} {thistProductQty ? thistProductQty : 1}
          <p
            className="qty"
            onClick={() => handleIncreaseCartQty(mainProductData)}
          >
          +
          </p>
            </span> 

            <button onClick={ () =>  handleCartAdd(mainProductData)}>Add to CArt</button>
          </div>
          <div className="share">
            <AiOutlineFacebook />
            <AiOutlineTwitter />
            <AiFillInstagram />
          </div>
        </div>
      </div>
      <div className="imags">
        {mainProductData?.images?.map((image,index) => (
          <div  onClick={() => setToBedisplayed(index)} className="imageContainer" key={image}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
      <div className="description">
        <h1 className="title">Description</h1>
        <hr />
        <p> {mainProductData?.description}</p>
      </div>

      <div className="relatedProducts">
        <h1 className="title">Related Products</h1>
        <hr />
        <div className="containe">
          {relatedProductsData?.slice(0, 5).map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
