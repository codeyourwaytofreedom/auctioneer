import "./products.css"

const Products = () => {
    return ( 
        <div className="Products">
            {
                [...Array(10)].map( e =>
                    <div className="Products_product">PRODUCT INFO</div>
                    )
            }
        </div>
     );
}
 
export default Products;