import "./login.css";
import gavel from "./gavel.png";
import bid from "./bid.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    let navigate = useNavigate();
    const handle_login = (e) => {
        e.preventDefault();
        console.log(88)
        axios.get("http://localhost:9000/express_backend"
                ).then(function (response) {
                    console.log(response.data[0].name);
                    if(response.data[0].name === "Can")
                    {
                        navigate("/");
                    }
                }).catch((error) => console.log(error))
        
        
    }

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
                            <button id="loginbutton" onClick={(e)=> handle_login(e)}>Login</button>
                        </div>
                    </form>
                        
                </div>
            </div>
        </div>
     );
}
 
export default Login;