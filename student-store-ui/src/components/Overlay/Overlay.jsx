import * as React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import SubNavbar from "../SubNavbar/SubNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";

export default function Overlay( {category, setCategory, searchInput, setSearchInput, sidebarOpen, handleOnToggle}) {
  

//   const [products, setProducts] = useState([]);

  // variable that keeps track of the variable that is currently selected in the category menu
//   const [category, setCategory] = useState("All Categories");

  // variable that keeps track of search inputs
//   const [searchInput, setSearchInput] = useState("");

//   useEffect(() => {
//     axios.get(url).then((response) => {
//       setProducts(response.data.products);
//     });
//   }, []);

//   const [sidebarOpen, setSidebar] = useState(false);

//   function handleOnToggle() {
//     setSidebar(!sidebarOpen);
//   }

  return (
    <main>
    
      <Navbar />
      <Hero />
    
      <Sidebar isOpen={sidebarOpen} handleOnToggle={handleOnToggle} />
     
      <SubNavbar
            category={category}
            setCategory={setCategory}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
   
      <Outlet />
      
      </main>
   
  );
}
