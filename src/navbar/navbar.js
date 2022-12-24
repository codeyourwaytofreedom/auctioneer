import "./navbar.css";
import auction from "./auction.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSignIn, faUser, faGavel } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


const Navbar = ({bg,auctioncolor}) => {
    const navigate = useNavigate();

    const handle_logout = () => {
        axios.get("http://localhost:9000/logout",{withCredentials: true}
                ).then(function (response) {
                    console.log(response);
                }).catch((error) => console.log(error))
                localStorage.removeItem("auctioneer_active");
                navigate("/login")
    }
    return ( 
        <div className="Navbar" style={{backgroundColor:bg}}>
            <div className="Navbar_icon">
                <img src={auction} alt="auctions" />
            </div>
            <div className="Navbar_motto" onClick={()=> navigate("/")} style={{color:auctioncolor}}>
                    auctioneer
            </div>
            <div className="Navbar_bid_page" onClick={()=> navigate("/bidding")} >
                <FontAwesomeIcon size="2x" icon={faGavel}/>
                <span id="bid_now">bid now</span>
            </div>
            <div className="Navbar_member">
                <div className="Navbar_member_logout" style={{display: localStorage.getItem("auctioneer_active") ? "flex" : "none"}}>
                    <button onClick={handle_logout}>
                        <div className="Navbar_member_login_icon">
                            <FontAwesomeIcon icon={faSignIn} size={"2x"}/>
                        </div>
                        <span>Log out</span>
                    </button>
                </div>
                <div className="Navbar_member_login" onClick={()=> navigate("/userprofile/xxxx")}  style={{display: localStorage.getItem("auctioneer_active") ? "flex" : "none"}}>
                    <button>
                        <div className="Navbar_member_login_icon">
                            <FontAwesomeIcon icon={faUser} size={"2x"}/>
                        </div>
                        <span>My Profile</span>
                    </button>
                </div>
                <div className="Navbar_member_login" onClick={()=> navigate("/login")}  style={{display: !localStorage.getItem("auctioneer_active") ? "flex" : "none"}}>
                    <button>
                        <div className="Navbar_member_login_icon">
                            <FontAwesomeIcon icon={faSignIn} size={"2x"}/>
                        </div>
                        <span>Log in</span>
                    </button>
                </div>
                <div className="Navbar_member_signup" onClick={()=> navigate("/register")}  style={{display: !localStorage.getItem("auctioneer_active") ? "flex" : "none"}}>
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