import "./products.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import cons from "./undercons.jpg";
import Product_carousel from "./product_carousel/product_carousel";

const Products = () => {
    let navigate = useNavigate();
/*     useEffect(()=> {
      axios.get("http://localhost:9000/userauth",
      {withCredentials: true}
      ).then(function (response) {
          console.log(response.data)
          if(!response.data)
          {
            navigate("/login")
          }
      }).catch((error) => console.log(error))
    }) */
    return ( 
        <div className="Products">
            {
                [...Array(20)].map( e =>
                    <Product_carousel/>
                    )
            }
        </div>
     );
}
 
export default Products;