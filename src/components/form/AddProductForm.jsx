/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import 'animate.css/animate.min.css'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./form.scss";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import { AiOutlineClose } from "react-icons/ai";
import Loader from "../Loader/Loader";
const AddProductForm = ({setFormOpen}) => {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [category, setCategory] = useState("");
  const [otherImages, setOtherImages] = useState([]);
  const [error, setError] = useState("");
  const handleOtherImagesChange = (e) => {
    const existingImage = otherImages.find(item => item.name===e.name)

    if (otherImages.length > 4 || existingImage)  return 
    setOtherImages([ ...otherImages,e]);
    
  };
// console.log(coverImage)
// console.log(otherImages)
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    try {
      setLoading(true)
        const uploadPromises = otherImages.map((file) => upload(file));
       const urls = await Promise.all(uploadPromises);
    //    console.log(urls)
        // setSelectedFiles((prevUrls) => [...prevUrls, urls]);
      const url = await upload(coverImage);
    // //  console.log(selectedFiles)
          await newRequest.post("/products", {
            title,
            userId: currentUser._id,
            username: currentUser._id,
            coverImage: url.toString(),
            images: urls,
            description,
            price,
            category,
            deliveryFee,
          });
    
      // Continue with the rest of your code that depends on the images being uploaded
      // For example, you can call a function here.
      setTitle('')
      setCategory('')
      setDeliveryFee(0)
setDescription("")
setOtherImages([])
setPrice("")
setCoverImage(undefined)
setSelectedFiles
setFormOpen(false)
      setLoading(false)
        toast.success('Product has been created sucessfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    //   setOtherImages([])
    } catch (error) {
      setError(error)
      toast.error(error, {
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

  return (
    <>
   <div className='formContainer'>
   <ToastContainer />
    {
      loading?<Loader/>:  <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        className='form'
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="file"
          className='form'
        name="coverImage"
        placeholder="Cover Image URL"
        onChange={(e) => setCoverImage(e.target.files[0])}
      />

      <textarea
        name="description"
        placeholder="Description"
        className='form'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
{/* {error && <h1>{error}</h1>} */}
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="number"
        name="deliveryFee"
        placeholder="Delivery Fee"
        value={deliveryFee}
        onChange={(e) => setDeliveryFee(e.target.value)}
      />
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select a Category</option>
        <option value="Shirts">Shirts</option>
        <option value="Shoes">Shoes</option>
        <option value="Trousers">Trousers</option>
        <option value="Others">Others</option>
      </select>
      <div className="images">
        <label htmlFor="otherImages"> Image To be added </label>
        {otherImages && (
          <div className="listImage"> 
          <AiOutlineClose onClick={() => setOtherImages([])} className="closeIcon" />
            {otherImages.map((img, i) => {
              return (
                <div key={i}>
                           <p >{img.name}  </p>
                           <hr />
                </div>
          
              );
            })}
          </div>
        )}
        <input
          type="file"
          name="otherImages"
          placeholder="Other Images"
          multiple // Add the 'multiple' attribute to accept multiple images
          onChange={(e) => handleOtherImagesChange(e.target.files[0])}
          accept="image/*"
        />
      </div>

      <button type="submit" style={{marginTop:'10px'}}>Add Product</button>
    </form>
    }
 
   </div>
   
   
    </>
  );
};

export default AddProductForm;
