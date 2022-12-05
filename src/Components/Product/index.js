import React from "react";

function Product(props) {
  const { name, color, material, price, image, setCart } = props;

  return (
    <div className="main-content-element">
      <div
        className="image-overlay-container"
        onClick={() => {
          setCart((cart) => cart + 1);
        }}
      >
        <img src={image} className="product-img" alt="product" />
        <div className="overlay">
          <p className="overlay-content">Add to Cart</p>
        </div>
      </div>
      <p className="main-content-element-tag">{name}</p>
      <div className="main-content-element-desc">
        <p className="main-content-element-color">{color}</p>
        <p className="main-content-element-material">{material}</p>
      </div>
      <p className="main-content-element-price">{`INR ${price}`}</p>
    </div>
  );
}

export default Product;
