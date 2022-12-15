
import "./product_carousel.css";
import cons from "./undercons.jpg";

const Product_carousel = () => {
    return ( 
    
    <div className="products_carousel">
        <div className="products_carousel_image">
            <img src={cons} alt="construction" />
        </div>
        <div className="products_carousel_details">
            detailss
        </div>
    </div>
    
    );
}
 
export default Product_carousel;