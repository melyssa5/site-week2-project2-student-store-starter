import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({isOpen, setSidebar}) {

  const sidebarClass = isOpen ? "sidebar open":"sidebar closed";
  const buttonClass = isOpen ? "toggle-button button open": "toggle-button button close"

  function handleOnToggle() {
    setSidebar(!isOpen);
  }

  function showIcons(){
    return (
      <>
      <div className="shopping-cart">
      <div className="cart-icons">
        <span>
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
        <span>
          <i className="material-icons md-48">monetization_on</i>
        </span>
        <span>
          <i className="material-icons md-48">fact_check</i>
        </span>
      </div>
    </div>
    </>
    )
  }


  
  return (
    <section className= {sidebarClass}>
      <div className="wrapper">
        <button className={buttonClass} onClick={handleOnToggle}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        {isOpen ? <ShoppingCart isOpen={isOpen} /> : showIcons()}

      </div>
    </section>
  );
}
