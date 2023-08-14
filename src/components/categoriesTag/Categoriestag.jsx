/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState } from 'react';
import './categories.scss';
import Card from '../card/Card';
import { sampleEcommerceProducts } from '../../constants';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Categoriestag = ({title,data}) => {


  return (
    <div className='categoriesContainer'>

<Link className='link' to={`/products?category=${title.name}`}>

      <h1 className='title'>{title.name}</h1>
      </Link>
        <div  className='container' >
          {/* Display only the products on the current page */}
          {data?.slice(0,12).map((product) => (
           
              <Card key={product.id} product={product} />
          
          ))}
        </div>
<div className='linkcontainer'> 
<h1> See more</h1>  <AiOutlineArrowRight/> </div>

      </div>
  );
};

export default Categoriestag;
