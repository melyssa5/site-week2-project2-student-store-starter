import * as React from "react";
import axios from "axios";
import ProductView from "../ProductView/ProductView";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css"

export default function ProductDetail() {
  const [productItem, setProductItem] = useState({});

  const url = "https://codepath-store-api.herokuapp.com/store/";

  const {id} = useParams();

  console.log(productItem)

  // GET request to endpoint for specific product
  useEffect(() => {
    axios.get(url + id).then((response) => {
      console.log("URL ID BELOW")
      console.log(url + id)
      setProductItem(response.data.product);
    })
    .catch( error => console.log("ERROR IN URL REQUEST"))
  }, []);

  return (
    <div className="product-detail"> <p> fjsnfj</p>
      <ProductView product={productItem} />
      <h1>Not Found</h1>
    </div>
  );
}
