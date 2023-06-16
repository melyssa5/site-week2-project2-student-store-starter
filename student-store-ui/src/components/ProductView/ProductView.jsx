import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView({product}){

    return (
        <div className="product-view">
            <h1 className="product-id"> Product # {product.id} </h1>
            <ProductCard product={product} />
        </div>
    )
}