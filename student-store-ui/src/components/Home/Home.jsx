import * as React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({ products, category, searchInput }) {
  function createProduct(info) {
    return (
      <div className="product-card">
        <div className="media">
          <Link to={"/products/" + info.id}>
            <img src={info.image} />
          </Link>
        </div>
        <p>{info.name}</p>
        <p>{info.price}</p>
      </div>
    );
  }

  const filtered = products.filter((product) => {
    return product.category === category.toLowerCase();
  });

  const returnItems = category == "All Categories" ? products : filtered;

  const searchFiltered = returnItems.filter((product) => {
    return product.name.toLowerCase().includes(searchInput);
  });

  return (
    <div className="home">
      <div className="product-grid" id="Buy">
        <div className="content">
          <div className="grid">
            {searchInput == ""
              ? returnItems.map((p) => createProduct(p))
              : searchFiltered.map((p) => createProduct(p))}
          </div>
        </div>
      </div>

      <div className="about" id="About">
        <div className="content">
          <h3>About</h3>
          <div className="summary">
            <div className="text">
              <p>
                The codepath student store offers great products at great prices
                from a great team and for a great cause.
              </p>
              <p>
                We've searched far and wide for items that perk the interests of
                even the most eccentric students and decided to offer them all
                here in one place.
              </p>
              <p>
                All proceeds go towards bringing high quality CS education to
                college students around the country.
              </p>
            </div>
            <div className="media">
              <img
                src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg"
                alt="codepath"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="contact" id="contact"></div>
      <footer className="footer">
        <div className="content">
          <div className="top">
            <div className="links">
              <div className="link-column">
                <h4>Categories</h4>
                <ul>
                  <li>All Categories</li>
                  <li>Clothing</li>
                  <li>Food</li>
                  <li>Accessories</li>
                  <li>Tech</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Company</h4>
                <ul>
                  <li>About Us</li>
                  <li>Find a Store</li>
                  <li>Terms</li>
                  <li>Sitemap</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Support</h4>
                <ul>
                  <li>Contact Us</li>
                  <li>Money Refund</li>
                  <li>Order Status</li>
                  <li>Shipping Info</li>
                  <li>Open Dispute</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Account</h4>
                <ul>
                  <li>Login</li>
                  <li>Register</li>
                  <li>Account Setting</li>
                  <li>My Orders</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Socials</h4>
                <ul>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                  <li>Instagram</li>
                  <li>YouTube</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Our App</h4>
                <ul>
                  <li>
                    <img src="	https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" alt="app store" />
                  </li>
                  <li>
                    <img
                      src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg"
                      alt="google play store"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom">
            <span className="payment-options">
              <img
                src="	https://codepath-student-store-demo.surge.sh/assets/american_express.40f242c7.svg"
                alt="american express"
              />
              <img src="https://codepath-student-store-demo.surge.sh/assets/mastercard.c75b7bc4.svg" alt="mastercard" />
              <img src="https://codepath-student-store-demo.surge.sh/assets/paypal.6a45b239.svg" alt="paypal" />
              <img src="https://codepath-student-store-demo.surge.sh/assets/visa.a818ddc4.svg" alt="visa" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
