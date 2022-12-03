import "./login.css";
import gavel from "./gavel.png";
import bid from "./bid.png";

const Login = () => {
    return ( 
        <div className="Login">
            <div className="Login_shell">
                <div className="Login_shell_gavel">
                    <img className="Login_shell_gavel_image" src={gavel} alt="gavel" />
                    <div id="bid">
                        <img id="bid_hand" src={bid} alt="bid" />
                    </div>                   
                </div>
                <div className="Login_shell_entries">
                    <form action="">
                        <div>
                            Entries
                        </div>
                        <div>
                            Login
                        </div>
                    </form>
                        
                </div>
            </div>
        </div>
     );
}
 
export default Login;