import * as React from "react";
import axios from "axios";
import ProductView from "../ProductView/ProductView";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail({handleAdd, handleRemove, quantityDictionary}) {
  const [productItem, setProductItem] = useState({});

  const url = "https://codepath-store-api.herokuapp.com/store/";

  const { id } = useParams();

  // console.log("QUANTITY DICT", quantityDictionary);
  // console.log("PRODUCT ITEM", productItem);


  // GET request to endpoint for specific product
  useEffect(() => {
    axios
      .get(url + id)
      .then((response) => {
        // console.log("URL ID BELOW");
        // console.log(url + id);
        setProductItem(response.data.product);
      })
      .catch((error) => console.log("ERROR IN URL REQUEST"));
  }, []);

  return (
    <div className="product-detail">
      {productItem?(
      <ProductView product={productItem} handleAdd={handleAdd} handleRemove={handleRemove} quantityDictionary={quantityDictionary}/>) : <h1>Loading</h1>}
    </div>
  );
}
