import "./products.css"

const Products = () => {
    return ( 
        <div className="Products">
            {
                [...Array(20)].map( e =>
                    <div className="Products_product">PRODUCT INFO</div>
                    )
            }
        </div>
     );
}
 
export default Products;