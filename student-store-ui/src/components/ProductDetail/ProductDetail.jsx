import * as React from "react";
import axios from "axios";
import ProductView from "../ProductView/ProductView";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [productItem, setProductItem] = useState();

  const url = "https://codepath-store-api.herokuapp.com/store/";

  const routeParams = useParams();

  // GET request to endpoint for specific product
  useEffect(() => {
    axios.get(url + routeParams.productId).then((response) => {
      setProductItem(response.data.product);
    });
  });

  return (
    <div className="product-detail"> hiiiiii
      productItem ?{" "}
      {<ProductView product={productItem} productId={productItem.id} />} :{" "}
      <h1>Not Found</h1>
    </div>
  );
}
