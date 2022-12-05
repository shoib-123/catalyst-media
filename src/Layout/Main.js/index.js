import React from "react";
import Product from "../../Components/Product";

function Main(props) {
  const { products, setCart } = props;

  return (
    <div className="main-content">
      {products.map((product, index) => {
        return (
          <Product
            name={product.name}
            color={product.color}
            material={product.material}
            price={product.price}
            image={product.image}
            setCart={setCart}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Main;
