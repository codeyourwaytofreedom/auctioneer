import "./navbar.css";
import auction from "./auction.png";

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div className="Navbar_icon">
                <img src={auction} alt="auctions" />
            </div>
            <div className="Navbar_motto">
                    auctioneer
            </div>
        </div>
     );
}
 
export default Navbar;