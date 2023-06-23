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

export default function Overlay( {category, setCategory, searchInput, setSearchInput, sidebarOpen, setSideBar, quantityDictionary, products, shoppingCart}) {
  console.log("overlay")
  console.log(products)
  return (
    <main>
    
      <Navbar />
      <Hero />

      <Sidebar isOpen={sidebarOpen} setSidebar={setSideBar} quantityDictionary={quantityDictionary} products={products} shoppingCartArr={shoppingCart}/>
     
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
