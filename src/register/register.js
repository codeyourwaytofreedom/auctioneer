import "./register.css";
import { useEffect } from "react";
import axios from "axios";

const Register = () => {
        useEffect(() => {
                    axios.get("http://localhost:9000/express_backend"
                ).then(function (response) {
                    console.log(response);
                }).catch((error) => console.log(error))
        });


return ( 
    <div className="register">
        <div className="register_shell">
                <div className="register_shell_entries">
                    <form action="">
                        <div className="register_shell_entries_username">
                            <input type="text" placeholder="Username..." />
                        </div>
                        <div className="register_shell_entries_email">
                            <input type="text" placeholder="Email..." />
                        </div>
                        <div className="register_shell_entries_password">
                            <input type="password" placeholder="Password..." />
                        </div>
                        <div className="register_shell_entries_password">
                            <input type="password" placeholder="Confirm password..." />
                        </div>
                        <div className="register_shell_entries_button">
                            <button id="registerbutton">Login</button>
                        </div>
                    </form>
                        
                </div>
        </div>
    </div>
    );
}
 
export default Register;