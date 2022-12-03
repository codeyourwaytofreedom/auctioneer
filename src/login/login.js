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
                        <div className="Login_shell_entries_email">
                            <input type="text" placeholder="Email..." />
                        </div>
                        <div className="Login_shell_entries_password">
                            <input type="text" placeholder="Password..." />
                        </div>
                        <div className="Login_shell_entries_button">
                            <button id="loginbutton">Login</button>
                        </div>
                    </form>
                        
                </div>
            </div>
        </div>
     );
}
 
export default Login;