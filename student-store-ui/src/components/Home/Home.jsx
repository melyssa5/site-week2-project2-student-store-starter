import * as React from "react"
import "./Home.css"

export default function Home({products}) {

  function createProduct(info) {
    return (
      <div className="product-card">
        <div className="media">
          <img src={info.image} />
        </div>
        <p>{info.name}</p>
        <p>{info.price}</p>
      </div>
    );
  }


  return (
    <div className="home">
      <div className="product-grid" id="Buy">
        <div className="content">
          <div className="grid">
            {products.map((product) => createProduct(product))}
          </div>
        </div>
      </div>
    </div>
  );
}
