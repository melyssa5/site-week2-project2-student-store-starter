import * as React from "react";
import axious from "axios";
import {useEffect} from 'react';
import ProductView from "./ProductView";
import { useParams } from "react-router-dom";

export default function ProductDetail(){

    const url = "https://codepath-store-api.herokuapp.com/store";

    const routeParams = useParams();

    // GET request to endpoint for specific product
    useEffect(() => {
        axious.get(url + '/'+ routeParams.id)
    });





    return(
        <div className="product-detail">

            <ProductView />

        </div>
    )
}