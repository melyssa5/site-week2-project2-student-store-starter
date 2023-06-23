import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart(products, shoppingCartArray, quantities) {
  // as soon as shoppingCart gets to a length of 1, you want to render the table in shopping cart
  // for each item in shopping cart, find the product that matches with the id from products
  // then using that item, render the row using info from products array
  // also look at the quantity. if there is only one,

  console.log(products)

  function renderRow(id) {
    let product = products.products?.find(item => item.id ==id)
    
    let quantityItem = products.quantities[id];
    return (
    <div className="product-row">
      <span className="flex-2 cart-product-name">{product.name}</span>
      <span className="center cart-product-quantity"> {quantityItem} </span>
      <span className="center cart-product-price">{product.price}</span>
      <span className="center cart-product-subtotal">{product.price * quantityItem}</span>
    </div>
    )
  }

  function renderTable() {
    let rows = products.shoppingCartArray?.map(item => {return renderRow(item.id)})
    return (
      <div className="CartTable">
        <div className="header">
          <div className="header-row">
            <span className="flex-2">Name</span>
            <span className="center">Quantity</span>
            <span className="center">Unit Price</span>
            <span className="center">Cost</span>
          </div>
        </div>
        {rows}

      </div>
    );
  }



  return (
    <div className="shopping-cart">
      <div className="open">
        <h3 className="">
          Shopping Cart
          <span className="button">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>
        

       
      {products.shoppingCartArray.length > 0? (renderTable()) : (
        <div className="notification">
          No items added to cart yet. Start shopping now!
        </div>)} 
        <div className="checkout-form">
          <h3 className="">
            Payment Info{" "}
            <span className="button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
          </h3>
          <div className="input-field">
            <label className="label">Name</label>
            <div className="control ">
              <input
                name="name"
                className="checkout-form-input"
                type="text"
                placeholder="Student Name"
                value=""
              />
            </div>
          </div>
          <div className="input-field">
            <label className="label">Email</label>
            <div className="control">
              <input
                name="email"
                className="checkout-form-input"
                type="email"
                placeholder="student@codepath.org"
                value=""
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input name="termsAndConditions" type="checkbox" />
                <span className="label">
                  I agree to the{" "}
                  <a href="#terms-and-conditions">terms and conditions</a>
                </span>
              </label>
            </div>
          </div>
          <p className="is-danger"></p>
          <div className="field">
            <div className="control">
              <button className="button checkout-button">Checkout</button>
            </div>
          </div>
          <div className="checkout-success">
            <h3>
              Checkout Info{" "}
              <span className="icon button">
                <i className="material-icons md-48">fact_check</i>
              </span>
            </h3>
            <div className="content">
              <p>
                A confirmation email will be sent to you so that you can confirm
                this order. Once you have confirmed the order, it will be
                delivered to your dorm room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
