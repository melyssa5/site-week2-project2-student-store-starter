import * as React from "react"
import "./Home.css"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

export default function Home({products, category}) {

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


  console.log(products)
  console.log(category)

  const filtered = products.filter(product => {
    return product.category === category.toLowerCase();
  });


  function returnProduct(){
    if (category == "All Categories"){
      return products.map((product) => createProduct(product))
    }
    else{
      return filtered.map((product) => createProduct(product))
    }
  }


  const returnItems = category == "All Categories" ? products : filtered;

  return (
    <div className="home">
      {/* <Link to="/About">click me to route</Link> */}
      <div className="product-grid" id="Buy">
        <div className="content">
          <div className="grid">
            {returnItems.map((product) => createProduct(product))}
          </div>
        </div>
      </div>

      <div className="about" id="About">
        <div className="content">
          <h3>About</h3>
          <div className="summary">
            <div className="text">
              <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
              <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
              <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
            </div>
            <div className="media">
              <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt="codepath"/>
            </div>

          </div>
        </div>
      </div>
      <div className="contact" id="contact"></div>
      <footer className="footer"></footer>
      
    </div>
  );
}
