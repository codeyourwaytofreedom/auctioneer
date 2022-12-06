import "./register.css";
import { useEffect } from "react";
import axios from "axios";
import que from "./que.jpg";

const Register = () => {
/*         useEffect(() => {
                    axios.get("http://localhost:9000/express_backend"
                ).then(function (response) {
                    console.log(response);
                }).catch((error) => console.log(error))
        }); */

        const handle_register = () => {

            axios.post("http://localhost:9000/express_backend",
                {url: "hello"}
            ).then(function (response) {
                console.log(response);
            }).catch((error) => console.log(error))
        }
        


return ( 
    <div className="register">
        <div className="register_shell">
            <div className="register_shell_animation">
                <img src={que} alt="xx" />
            </div>
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
                            <button id="registerbutton" type="submit" onClick={handle_register}>Register</button>
                        </div>
                    </form>
                        
                </div>
        </div>
    </div>
    );
}
 
export default Register;