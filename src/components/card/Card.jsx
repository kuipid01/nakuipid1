/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import "./card.scss";
import {
  AiOutlinePhone,
  AiOutlineSearch,
  AiFillContainer,
  AiOutlineDown,
} from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
const Card = ({ product, featured }) => {
  const [qty, setQty] = useState(1);
  const { isLoading, error, data } = useQuery({
    queryKey: ["user", product.userId], // Use a descriptive string as the first element
    queryFn: () =>
      newRequest.get(`/users/${product.userId}`).then((res) => {
        return res.data;
      }),
  });
  const [productIsInCart, setProductIsInCart] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const handleIncreaseCartQty = (product) => {
    setCart((prevState) =>
      prevState.map((item) =>
        item._id === product._id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };
  const handleDecreaseCartQty = (product) => {
    setCart((prevState) =>
      prevState.map((item) =>
        item._id === product._id
          ? { ...item, qty: item.qty === 1 ? item.qty : item.qty - 1 }
          : item
      )
    );
  };
  useEffect(() => {
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      //   setCart(prevState => prevState.map(item =>
      //   item._id===product._id ? {
      //     ...item,
      //     qty:item.qty+1
      //   } : item
      //     ))
      const ProductHere = cart.filter((item) => item._id === product._id);
      console.log(ProductHere);
      setProductIsInCart(true);
      setQty(ProductHere[0].qty);
    } else {
      setProductIsInCart(false);
    }
  }, [cart, setProductIsInCart, product._id]);
  const handleAddToCart = (product) => {
    setCart([
      {
        ...product,
        qty: 1,
      },
      ...cart,
    ]);
  };
  // const existingItem = cart.find((item) => item._id === product._id)
  // if (existingItem) {
  //   setCart(prevState => prevState.map((item) =>
  //   item._id===product._id ? {...item, qty : item.qty+1 } : item
  //   ))
  // }

  // else{
  //   setCart([{...product,qty:1}, ...cart])
  // }

  const { title, description, price, category, coverImage, stock } = product;
  return (
    <>
      <div className={`cardmainContainer ${featured ? "cardfeatured" : ""} `}>
        <Link to={`/product/${product._id}`} className="linkcard acard">
          <div className="cardContainer">
            <img src={coverImage} alt="" />
            {/* <div className='stars'></div> */}
            <p className="Cardtitle">{title}</p>
            <h1>{price}</h1>
            {isLoading ? (
              "Loading"
            ) : error ? (
              "An Error Occured "
            ) : (
              <Link
                to={`/profile/userid/${product.userId}`}
                className="linkcard"
              >
                {" "}
                <div className="user">
                  {" "}
                  <img src={data?.userImage} alt="" />{" "}
                  <span>{data?.username} </span>{" "}
                </div>
              </Link>
            )}
          </div>
        </Link>
        {productIsInCart ? (
          <span className="productspan">
            <p className="qty" onClick={() => handleDecreaseCartQty(product)}>
              -{" "}
            </p>
            <p> {qty}</p>

            <p className="qty" onClick={() => handleIncreaseCartQty(product)}>
              +
            </p>
          </span>
        ) : (
          <div className="btnCard" onClick={() => handleAddToCart(product)}>
            {" "}
            <AiFillContainer /> Add to cart
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
