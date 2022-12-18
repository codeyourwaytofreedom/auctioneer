import "./products.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Product_carousel from "./product_carousel/product_carousel";

const Products = ({response_image, category}) => {
    return ( 
        <div className="products">
            {
                [...Array(10)].map( (e, index )=>
                        <Product_carousel index={index} response_image={response_image} category={category}/>                    
                    )
            }
        </div>
     );
}
 
export default Products;