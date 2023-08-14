/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import "./cartpage.scss";
import { CartContext } from "../../contexts/CartContext";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
const CartPage = () => {
   const [subTotal, setSubTotal] = useState(0)
  const arr = [1, 2, 3, 4, 5];
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    setSubTotal (
      cart.reduce((acc,curr) => acc + Number(curr.price * curr.qty) ,0 ))
   }, [cart])
  
  const handleCartItemDelete = (product) => {
    const filteredCart = cart.filter((item) => item._id !== product._id);

    setCart(filteredCart);
  };
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
  const CartItem = ({ product }) => (
    <div className="cartItem">
      <div className="imgContainer">
        <img src={product?.coverImage} alt="" />
        <div className="desc">
          <p className="carttitle">{product?.title}</p>
          <p className="desc">{product?.description.slice(0,70)}</p>
          <div className="mobile">
        <h1 className="title ">#{product?.price}</h1>
        <div className="qty">
        <span>Quantity:</span>
          <button
            className="qty"
            onClick={() => handleDecreaseCartQty(product)}
          >
            -
           
          </button>{" "}
          <span className="qty1"> {product?.qty}</span>{" "}
          <button
            className="qty"
            onClick={() => handleIncreaseCartQty(product)}
          >
          +
          </button>
        </div>
      </div>
          <p className="wishlist">
            <span>Made it to cart</span>
            <div
              onClick={() => handleCartItemDelete(product)}
              className="remove"
            >
              <AiOutlineClose />
              <span>Remove</span>
            </div>
          </p>
        </div>
      </div>
      <div className="price">
        <h1 className="price">#{product?.price}</h1>
        <div className="qty">
        <span>Quantity:</span>
          <button
            className="qty"
            onClick={() => handleDecreaseCartQty(product)}
          >
            -
           
          </button>{" "}
          <span className="qty1"> {product?.qty}</span>{" "}
          <button
            className="qty"
            onClick={() => handleIncreaseCartQty(product)}
          >
          +
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="cartpagecontainer">
      <div className="cartContainer">
       {cart.length!==0 ? (cart?.map((item) => (
          <CartItem product={item} key={item._id} />
        )) ): <div>
           <p>Nothing to show, please add products to cart</p>
           <Link className="" to='/' >Go home</Link>
          </div>
}
      </div>
      <div className="summary">
        <h1 className="titlesummary">Order Summary</h1>
        <div className="summaryContainer">
          <div className="ordercontainer">
            <div className="subtotal">
              <h1 className="stotal">Items Subtotal:</h1>
              <span>#{subTotal}</span>
            </div>
            <hr />
            <div className="tax">
              <h1 className="stax">Tax:</h1>
              <span>#{ Math.round( 0.1 * subTotal)}</span>
            </div>
            <hr />
            <div className="total">
              <h1 className="stotal">Total:</h1>
            <span>#{Math.round((0.1 * subTotal) + subTotal)}</span>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
