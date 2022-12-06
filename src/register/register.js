import "./register.css";
import { useEffect, useState } from "react";
import axios from "axios";
import que from "./que.jpg";
import { useRef } from "react";

const Register = () => {
/*         useEffect(() => {
                    axios.get("http://localhost:9000/express_backend"
                ).then(function (response) {
                    console.log(response);
                }).catch((error) => console.log(error))
        }); */

    const [output, setOutput] = useState("aa");

    // form data references
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmpassword = useRef();

    const handle_register = (e) => {
        e.preventDefault()
        const auctioneer = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            confirmpassword:confirmpassword.current.value
        }
        axios.post("http://localhost:9000/express_backend",
            {auctioneer: auctioneer}
        ).then(function (response) {
            console.log(response);
            setOutput(response.data);
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
                            <input type="text" placeholder="Username..." ref={username} />
                        </div>
                        <div className="register_shell_entries_email">
                            <input type="text" placeholder="Email..." ref={email}/>
                        </div>
                        <div className="register_shell_entries_password">
                            <input type="password" placeholder="Password..." ref={password}/>
                        </div>
                        <div className="register_shell_entries_password">
                            <input type="password" placeholder="Confirm password..." ref={confirmpassword}/>
                        </div>
                        <div className="register_shell_entries_button">
                            <button id="registerbutton" type="submit" onClick={(e)=>handle_register(e)}>Register</button>
                        </div>
                        {typeof(output)}
                    </form>
                        
                </div>
        </div>
    </div>
    );
}
 
export default Register;