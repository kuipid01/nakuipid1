/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import "./shop.scss";
import { sampleEcommerceProducts } from "../../constants";
import Card from "../../components/card/Card";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
const Shop = () => {
  const [selectedSort, setSelectedSort] = useState("");

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    setSelectedSort(sortValue);
    // Handle sorting logic based on the selected sort value
    // For example, update your product list based on the sort value
  };
  const minRef = useRef();
  const maxRef = useRef();
  const { search } = useLocation();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["productsData"],
    queryFn: () =>
      newRequest
        .get(
          `/products`
        )
        .then((res) => {
          return res.data;
        }),
  });
  const apply = () => {
    refetch();
  };
  return (
    <div className="productsContainer2">
      <img src="" alt="" />

      <h1>All Products</h1>

      <p>go through products</p>

      <div className="budget2">
        <span className="sortNumber">
          {" "}
          <span>Budget :{" "}</span> 
          <div className="inputBoxesContainer">
            <span className="boxdirect">
            <input ref={minRef} type="text" placeholder="minimum price" />{" "}
          <input ref={maxRef}  type="text" placeholder="maximum price" />{" "}
            </span>
            <div className='restrictbtn'  onClick={apply}>Restrict</div>{" "}
          </div>
         
          

        </span>
        {/* <span className="sort">
          <label htmlFor="sortBy">Sort By:</label>
          <select id="sortBy" value={selectedSort} onChange={handleSortChange}>
            <option value="">Select...</option>
            <option value="bestSelling">Best Selling</option>
            <option value="cheapest">Cheapest</option>
            <option value="expensive">Most Expensive</option>
            <option value="location">Location</option>
          </select>
        </span> */}
      </div>

      <div className="containerProduct">
        {isLoading
          ? <Loader/>
          : error
          ? "An Error Occured "
          : data.map((product) => (
              
                <Card key={product._id} product={product} />
          
            ))}
      </div>
    </div>
  );
};

export default Shop;
