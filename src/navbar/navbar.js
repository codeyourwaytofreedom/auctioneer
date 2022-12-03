import "./navbar.css";
import auction from "./auction.png";
import login from "./login.png"
import signup from "./signup.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSignIn } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div className="Navbar_icon">
                <img src={auction} alt="auctions" />
            </div>
            <div className="Navbar_motto">
                    auctioneer
            </div>
            <div className="Navbar_member">
                <div className="Navbar_member_login">
                    <button>
                        <div className="Navbar_member_login_icon">
                            <FontAwesomeIcon icon={faSignIn} size={"2x"}/>
                        </div>
                        <span>Sign in</span>
                    </button>
                </div>
                <div className="Navbar_member_signup">
                    <button>
                        <div className="Navbar_member_signup_icon">
                            <FontAwesomeIcon icon={faPlusCircle} size={"2x"} />
                        </div>
                        <span>Sign up</span>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;