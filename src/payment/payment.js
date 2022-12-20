import "./payment.css";
import success from "./success.jpg";

const Payment = () => {
    return ( <div className="payment">
        <div className="payment_shell">
            <div>
                <img src={success} alt="aaa" />
                <span id="successful_payment">
                    Payment Successful...
                </span>
            </div>
        </div>
    </div> );
}
 
export default Payment;