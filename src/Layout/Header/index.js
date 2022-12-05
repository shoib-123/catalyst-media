import React from "react";
import shoppingCart from "../../Assets/Images/shopping-cart.png";

function Header(props) {
  const { handleFeature, handleAll, cart, featuredData } = props;

  return (
    <>
      <div className="nav-header">
        <p className="heading">MYCOOLSHOP.COM</p>
      </div>
      <div className="sec-nav-header">
        <div className="sec-nav-left-container">
          <p
            className={
              featuredData.length > 0
                ? " sec-nav-left-content-light"
                : "sec-nav-left-content-bold"
            }
            onClick={handleAll}
          >
            All Products
          </p>
          <p
            className={
              featuredData.length > 0
                ? " sec-nav-left-content-bold"
                : "sec-nav-left-content-light"
            }
            onClick={handleFeature}
          >
            Featured Products
          </p>
        </div>
        <div className="sec-nav-right-container">
          <img
            src={shoppingCart}
            className="sec-nav-right-content-image"
            alt="cart"
          />
          <p className="sec-nav-right-content">{cart}</p>
        </div>
      </div>
    </>
  );
}

export default Header;
