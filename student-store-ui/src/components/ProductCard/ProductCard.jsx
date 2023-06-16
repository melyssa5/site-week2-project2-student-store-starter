import * as React from "react";

export default function ProductCard({ product }) {



    // create function that takes in price from api and returns it in a correct format

    console.log(product)

  return (
    <div className="product-view-card">
      <div className="product-card">
        <div className="media"></div>
        <div className="product-info">
          <div className="main-info">
            <p className="product-name">{product.name}</p>
            <div className="stars"> </div>
            <p className="product-price">{product.price}</p>
          </div>
          <div className="desc">
            <p className="product-description">{product.description}</p>
          </div>
          <div className="actions"> </div>
        </div>
      </div>
    </div>
  );
}
