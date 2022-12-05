import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Main from "../../Layout/Main.js";
import useApi from "../../Hooks/useApi";
import {
  modifyResponse,
  filterResponse,
  featuredProducts,
} from "../../Helpers/modifyResponse";
import Loader from "../../Components/Loader";

function Home() {
  const [productData, setProductData] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState([]);
  const [compareArr, setCompareArr] = useState([]);
  const [cart, setCart] = useState(0);
  const { material, products, colors, featured } = useApi([
    "products",
    "material",
    "colors",
    "featured",
  ]);

  useEffect(() => {
    if (products.length > 0 && material.length > 0 && colors.length > 0) {
      setProductData(modifyResponse(products, colors, material));
    }
  }, [material, products, colors]);

  useEffect(() => {
    if (compareArr.length > 0) {
      if (featuredData.length > 0) {
        setFilteredProductData(filterResponse(featuredData, compareArr));
      } else {
        setFilteredProductData(filterResponse(productData, compareArr));
      }
    } else {
      setFilteredProductData([]);
    }
  }, [compareArr, productData]);

  const handleFeature = () => {
    setFilteredProductData([]);
    setFeaturedData(featuredProducts(featured, productData));
  };

  const handleAll = () => {
    setFilteredProductData([]);
    setFeaturedData([]);
  };

  return (
    <div className="wrapper">
      <Header
        handleFeature={handleFeature}
        handleAll={handleAll}
        cart={cart}
        featuredData={featuredData}
      />
      {products.length > 0 && material.length > 0 && colors.length > 0 ? (
        <div className="content-container">
          <Sidebar
            material={material}
            colors={colors}
            setCompareArr={setCompareArr}
            compareArr={compareArr}
          />
          <Main
            products={
              filteredProductData.length > 0
                ? filteredProductData
                : featuredData.length > 0
                ? featuredData
                : productData
            }
            setCart={setCart}
          />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Home;
