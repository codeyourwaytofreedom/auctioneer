
import "./product_carousel.css";
import cons from "./undercons.jpg";
import { useNavigate } from "react-router-dom";

const Product_carousel = () => {
    const nav = useNavigate();
    return ( 
    
    <div className="products_carousel" onClick={()=>nav("/bidding/xx") }>
        <div className="products_carousel_image">
            <img src={cons} alt="construction" />
        </div>
        <div className="products_carousel_details">
            <div className="products_carousel_details_title" >
                <span>
                    Auction Date
                </span>
                <span>
                    Auction Time
                </span>
                <span>
                    Deposit
                </span>
            </div>
            <div className="products_carousel_details_info" >
                <span>
                    17th August 2022
                </span>
                <span>
                    14:00 GMT
                </span>
                <span id="mindeposit">
                    15% - Min: £300
                </span>
            </div>
        </div>
    </div>
    
    );
}
 
export default Product_carousel;