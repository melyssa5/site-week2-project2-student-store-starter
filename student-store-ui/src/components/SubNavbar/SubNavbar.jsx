import * as React from "react";
import "./SubNavbar.css";
import { useState } from "react";

export default function SubNavbar({ items, setItems, category, setCategory }) {
  const [active, setActive] = useState(true);

  //function that handles when the menu button is clicked, changing visibility of category menu
  function handleMenuButton(event) {
    setActive(!active);
  }

  const categoryMenu = active ? "category-menu open" : "category-menu closed";

  const categoryClass = { "All Categories": "is-active" };

  function handleCategoryClick(event) {
    const newCat = event.target.innerText;
    setCategory(newCat);
  }

  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input type="text" name="search" placeholder="Search" />
            <i className="material-icons">search</i>
          </div>
          <div className="links">
            <span className="help">
              <i className="material-icons">help</i>
              "Help"
            </span>
            <div className="cart">
              <a href="/">
                "My Cart"
                <i className="material-ions">shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="hamburger-menu">
            <i className="material-icons" onClick={handleMenuButton}>
              menu
            </i>{" "}
          </div>
          <ul className={categoryMenu}>
            <li className={category == "All Categories" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>All Categories</button>
            </li>
            <li className={category == "Clothing" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>Clothing</button>
            </li>
            <li className={category == "Food" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>Food</button>
            </li>
            <li className={category == "Accessories" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>Accessories</button>
            </li>
            <li className={category == "Tech" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>Tech</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
