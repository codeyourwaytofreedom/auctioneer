import "./login.css";
import gavel from "./gavel.png";
import bid from "./bid.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWarning } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";


const Login = () => {
    let navigate = useNavigate();
    const email = useRef();
    const password = useRef();

    const handle_login = (e) => {
        e.preventDefault();

        const user = {
                email: email.current.value,
                password: password.current.value
        }
        axios.post("http://localhost:9000/express_backend",
        {user_loggingin: user}
        ).then(function (response) {
            console.log(response);
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
                            <input type="text"  placeholder="Email..." ref={email}/>
                        </div>
                        <div className="Login_shell_entries_password">
                            <input type="text" placeholder="Password..." ref={password}/>
                        </div>
                        <div className="Login_shell_entries_button">
                            <button id="loginbutton" onClick={(e)=> handle_login(e)}>Login</button>
                        </div>
                    </form>
                        <div className="Login_shell_entries_warning">
                            <span><FontAwesomeIcon icon={faWarning} color={"red"} /></span>
                            <span>Invalid email or password! </span>
                        </div>
                        <div className="Login_shell_entries_reminder">
                            <span>Don't have an account? </span><span id="signup"><a href="/register">Sign up</a></span>
                        </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Login;