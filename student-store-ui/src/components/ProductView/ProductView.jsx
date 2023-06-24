import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView({
  product,
  handleAdd,
  handleRemove,
  quantityDictionary
}) {
  return (
    <div className="product-view">
      <h1 className="product-id"> Product # {product.id} </h1>
      <ProductCard
        product={product}
        showDesc={true}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        quantityDictionary={quantityDictionary}
      />
    </div>
  );
}