import * as React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import SubNavbar from "../SubNavbar/SubNavbar";
import "./App.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import About from "../About/About";


export default function App() {

  const url = "https://codepath-store-api.herokuapp.com/store";
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  const [sidebarOpen, setSidebar] = useState(false);
  
  function handleOnToggle(){
    setSidebar(!sidebarOpen);
  }
  



  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar isOpen={sidebarOpen} handleOnToggle={handleOnToggle} />
          <Hero />
          <SubNavbar items={products} setItems={setProducts}/>
          <Home products={products} />
        </main>
{/* 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}
