import "./products.css"

const Products = () => {

    

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