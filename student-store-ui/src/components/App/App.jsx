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
  const apiServer = "http://localhost:3001/"

  const [products, setProducts] = useState([]);

  // variable that keeps track of the variable that is currently selected in the category menu
  const [category, setCategory] = useState("All Categories");

  // variable that keeps track of search inputs
  const [searchInput, setSearchInput] = useState("");

  const [sidebarOpen, setSidebar] = useState(false);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path=""
              element={
                <Overlay
                  category={category}
                  setCategory={setCategory}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  sidebarOpen={sidebarOpen}
                  setSideBar={setSidebar}
                
                />
              }
            >
              <Route
                path=""
                element={
                  <Home
                    products={products}
                    category={category}
                    searchInput={searchInput}
                  />
                }
              />
              <Route path="/products/:id" element={<ProductDetail />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
