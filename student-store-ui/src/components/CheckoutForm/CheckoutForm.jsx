import * as React from "react";
import { useState } from "react";


export default function CheckoutForm({
  shoppingCart,
  checkoutForm,
  handleCheckoutFormChange,
  products,
  quantities,
  setShoppingCart,
  setCheckoutForm
}) {
  let [checkout, setCheckout] = useState(false);

  let totalPrice = 0; 

  function renderListItem(id) {
    let product = products?.find((item) => item.id == id);
    let quantityItem = quantities[id];
    let total = product.price * quantityItem;
    totalPrice += total
    return (
      <li>
        ${quantityItem} total ${product.name} purchased at a cost of $
        {product.price} for a total cost of {total}.
      </li>
    );
  }

  function checkCheckoutForm() {
    if (checkoutForm.name.length == 0 || checkoutForm.email.length == 0) {
      return false;
    }
    return true;
  }

  function handleCheckoutButtonWarning() {
    if (shoppingCart.length == 0) {
      setCheckout(false);
    }
    else if (!checkCheckoutForm()) {
      setCheckout(false);
    } else {
      setCheckout(true);
      setShoppingCart([])};
  }

  function checkoutSuccess() {
    
    let rows = shoppingCart?.map((item) => {
      return renderListItem(item.id);
    });

   
    return (
      <div className="checkout-success">
        <h3>
          Checkout Info{" "}
          <span className="icon button">
            <i className="material-icons md-48">fact_check</i>
          </span>
        </h3>
        <div className="card">
          <header className="card-head">
            <h4 className="card-title">Receipt</h4>
          </header>
          <section className="card-body">
            <p className="header">
              Showing receipt for {checkoutForm.name} available at{" "}
              {checkoutForm.email}:
            </p>
            <ul className="purchase">
              {rows}
              <li>Before taxes, the subtotal was ${totalPrice}</li>
              <li>
                After taxes and fees were applied, the total comes out to ${totalPrice*0.0875}
              </li>
            </ul>
          </section>
          <footer className="card-foot">
            <button className="button is-success" onClick={(e) => {
              setCheckout(false);
            }}>Shop More</button>
            <button className="button">Exit</button>
          </footer>
        </div>
      </div>
    );
  }

  return (
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
            value={checkoutForm.name}
            onChange={(e) => {
              handleCheckoutFormChange("name", e.target.value);
            }}
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
            value={checkoutForm.email}
            onChange={(e) => {
              handleCheckoutFormChange("email", e.target.value);
            }}
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
          <button
            className="button checkout-button"
            onClick={(e) => {
              handleCheckoutButtonWarning();
              
              setCheckoutForm({name: "", email: ""});
            }}
          >
            Checkout
          </button>
        </div>
      </div>
      {checkout ? (
        checkoutSuccess()
      ) : (
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
      )}
    </div>
  );
}
