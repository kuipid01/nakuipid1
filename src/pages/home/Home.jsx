/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Feature from "../../components/featured/Feature";
import MainFeature from "../../components/mainfeatures/MainFeature";
import Categoriestag from "../../components/categoriesTag/Categoriestag";
import Loader from "../../components/Loader/Loader";
import MainCat from "../../components/maincategories/MainCat";
import Footer from "../../components/footer/Footer";
import { categories } from "../../constants";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Link } from "react-router-dom";
const Home = () => {
  const {
    isLoading: isFetching,
    error: errorFeatured,
    data: dataFeatured,
  } = useQuery({
    queryKey: [`featuredproduct`],
    queryFn: () =>
      newRequest.get(`/products?featured=true`).then((res) => {
        return res.data;
      }),
  });
  const { isLoading, error, data } = useQuery({
    queryKey: [`products`],
    queryFn: () =>
      newRequest.get(`/products`).then((res) => {
        return res.data;
      }),
  });
  const {
    isLoading: isLoadingAll,
    error: errorAll,
    data: dataAll,
    refetch,
  } = useQuery({
    queryKey: ["productsData"],
    queryFn: () =>
      newRequest.get(`/products`).then((res) => {
        return res.data;
      }),
  });

  
  const [shirt, setshirt] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [trousers, setTrousers] = useState([]);
  const [others, setOthers] = useState([]);
  useEffect(() => {
 
  if(data!==undefined && data!==null ){

    const filteredShirts = data?.filter((item) =>
    ["shirts", "Shirts", "shirt", "Shirt"].includes(item.category)
  );
  const filteredTrousers = data?.filter((item) =>
    ["trousers", "Trousers", "trouser", "Trouser"].includes(item.category)
  );
  const filteredShoes = data?.filter((item) =>
    ["shoes", "Shoes"].includes(item.category)
  );

  const filteredOthers = data?.filter(
    (item) => !["trouser", "shoes", "shirts"].includes(item.category)
  );
  
  setshirt(filteredShirts);
  setShoes(filteredShoes);
  setTrousers(filteredTrousers);
  setOthers(filteredOthers);
  }
  }, [data]);


  const categoryData = {
    Shirts: shirt,
    Shoes: shoes,
    Trousers: trousers,
    Others: others, // Add other state if needed
  };
  return (
    <div className="main">
      <div className="homeContainer">
        <Navbar />
        <img className="imgBgOverlay" src="/assets/img5.png" alt="" />
        <div className="imgOverlay"></div>
        <div className="textContainer">
          <div className="text">
            <p>Get our personalise designed wears</p>
            <h1> Wear Nakuipid</h1>
            <Link style={{textDecoration:"none"}} classnam="link" to="/shop">
              <button>Start Shopping</button>
            </Link>
          </div>
          <div className="img">
            <img src="/assets/img8.png" alt="" />
          </div>
        </div>
        <div className="chngeImgcontainer">
          <div className="active one">
            {" "}
            <img src="/assets/img6.png" alt="" />{" "}
          </div>
          <div className=" two">
            {" "}
            <img src="/assets/img3.png" alt="" />{" "}
          </div>
        </div>
      </div>
      <MainCat />
      <MainFeature />
      {dataFeatured && <Feature products={dataFeatured} />}

      <br />
      <br />
      <br />
      <br />
      <br />
      {
       dataAll ?
     ( categories.map((category) => (
        <div key={category.id}>
          <Categoriestag data={categoryData[category.name]} title={category} />

          <br />
          <br />
          <br />
        </div>
      ))) : <Loader/>
      }
    </div>
  );
};

export default Home;
