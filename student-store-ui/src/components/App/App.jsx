import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";
import Overlay from "../Overlay/Overlay";

export default function App() {
  
  const url = "https://codepath-store-api.herokuapp.com/store";
  const apiServer = "http://localhost:3001/";

  const [products, setProducts] = useState([]);

  // variable that keeps track of the variable that is currently selected in the category menu
  const [category, setCategory] = useState("All Categories");

  // variable that keeps track of search inputs
  const [searchInput, setSearchInput] = useState("");

  const [sidebarOpen, setSidebar] = useState(false);

  const [quantity, setQuantity] = useState({});

  const [shoppingCart, setShoppingCart] = useState([]);

  //holds user information
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" });

  console.log("quantity dictionary")
  console.log(quantity);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  function handleOnCheckoutFormChange(nameInput, text) {
    setCheckoutForm({ ...checkoutForm, [nameInput]: text });
  }

  function handleAddItemToCart(productId) {
    if (productId in quantity) {
      setQuantity({ ...quantity, [productId]: quantity[productId] + 1 });
    } else {
      setQuantity({ ...quantity, [productId]: 1 });
    }

    const cartItem = shoppingCart?.find((item) => item.id == productId);
    
    
    if (cartItem) {
      const updateCart = shoppingCart?.map((item) => {
        if (item.id == productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setShoppingCart(updateCart);
    } else {
      setShoppingCart([...shoppingCart, { id: productId, quantity: 1 }]);
    }
  }



  function handleRemoveItemToCart(productId) {
    if (productId in quantity) {
      if (quantity[productId] > 1) {
        const remove = { ...quantity, [productId]: quantity[productId] - 1 };
        setQuantity(remove);
      } else {
        const create = { ...quantity, [productId]: 0 };
        setQuantity(create);
      }
    }

    const cartItem = shoppingCart?.find((item) => item.id == productId);

    if (cartItem && cartItem.quantity > 1) {
      const updateCart = shoppingCart?.map((item) => {
        if (item.id == productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setShoppingCart(updateCart);
    } else {
      const removed = shoppingCart?.filter((item) => item.id != productId);
      setShoppingCart(removed);
    }
  }

  return (
    <div className="app">
      <BrowserRouter>

          <Routes>
            <Route
              path="/"
              element={
                <Overlay
                  category={category}
                  setCategory={setCategory}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  sidebarOpen={sidebarOpen}
                  setSideBar={setSidebar}
                  quantityDictionary={quantity}
                  products={products}
                  shoppingCart={shoppingCart}
                  handleCheckoutFormChange={handleOnCheckoutFormChange}
                  checkoutForm={checkoutForm}
                  setShoppingCart={setShoppingCart}
                  setCheckoutForm={setCheckoutForm}
                />
              }
            >
              <Route
                path="/"
                element={
                  <Home
                    products={products}
                    category={category}
                    searchInput={searchInput}
                    handleAdd={handleAddItemToCart}
                    handleRemove={handleRemoveItemToCart}
                    quantityDictionary={quantity}
                  />
                }
              />
              <Route
                path="/products/:id"
                element={
                  <ProductDetail
                    handleAdd={handleAddItemToCart}
                    handleRemove={handleRemoveItemToCart}
                    quantityDictionary={quantity}
                  />
                }
              />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
