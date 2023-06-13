import * as React from "react";
import "./Sidebar.css";

export default function Sidebar({isOpen, handleOnToggle}) {

  const sidebar = isOpen ? "sidebar open":"sidebar closed";

  

  return (
    <section className= {sidebar}>
      <div className="wrapper">
        <button className="toggle-button" onClick={handleOnToggle}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          <div className="icons">
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
      </div>
    </section>
  );
}
