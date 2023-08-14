/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import "./products.scss";
import { sampleEcommerceProducts } from "../../constants";
import Card from "../../components/card/Card";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";
const Products = () => {
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
  console.log(search)
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["productsData"],
    queryFn: () =>
      newRequest
        .get(
          `/products${search}&min=${minRef.current.value}&max=${maxRef.current.value}`
        )
        .then((res) => {
          return res.data;
        }),
  });
  const apply = () => {
    refetch();
  };
  return (
    <div className="productsContainer">
      <img src="" alt="" />

      <h1>Category Title</h1>

      <p>Find products related Category </p>

      <div className="budget">
        <span className="sortNumber">
          {" "}
          <span>Budget</span> :{" "}
          <div className="inputBoxesContainer">
            <span className="boxdirect">
            <input ref={minRef} type="text" placeholder="minimum price" />{" "}
          <input ref={maxRef}  type="text" placeholder="maximum price" />{" "}
            </span>
            <button  onClick={apply}>Restrict</button>{" "}
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
          ? "Loading"
          : error
          ? "An Error Occured "
          : data.map((product) => (
              <div key={product._id} className="productCard">
                <Card product={product} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Products;
