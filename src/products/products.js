import "./products.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Product_carousel from "./product_carousel/product_carousel";

const Products = ({response_image}) => {
    return ( 
        <div className="products">
            {
                [...Array(20)].map( e =>
                        <Product_carousel response_image={response_image}/>                    
                    )
            }
        </div>
     );
}
 
export default Products;