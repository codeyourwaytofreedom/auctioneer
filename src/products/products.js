import "./products.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Products = () => {
    let navigate = useNavigate();
    useEffect(()=> {
      axios.post("http://localhost:9000/userauth",
      {},
      {withCredentials: true}
      ).then(function (response) {
          console.log(response.data)
          if(!response.data)
          {
            navigate("/login")
          }
      }).catch((error) => console.log(error))
    })
    return ( 
        <div className="Products">
            {
                [...Array(20)].map( e =>
                    <div className="Products_product">
                        <button>Cick me</button>
                    </div>
                    )
            }
        </div>
     );
}
 
export default Products;