import "./register.css";
import { useEffect, useState } from "react";
import axios from "axios";
import que from "./que.jpg";
import { useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWarning } from '@fortawesome/free-solid-svg-icons';


const Register = () => {
/*         useEffect(() => {
                    axios.get("http://localhost:9000/express_backend"
                ).then(function (response) {
                    console.log(response);
                }).catch((error) => console.log(error))
        }); */

    const [warning, setWarning] = useState(null);

    // form data references
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmpassword = useRef();

    let username_warning = "*Username must be 8 characters-long and must include only letters and numbers!";
    let email_warning = "*Please enter a valid email adress!";
    let password_warning = "*Password must be 8 characters long minimum and must include at least one letter and one number!";
    let confirm_warning = "*Please make sure that you confirm your password!";

    const handle_register = (e) => {
        
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
        }).catch((error) => console.log(error))

        e.preventDefault()
    }

    const handle_username = () => {
        if(/^[A-Za-z0-9]*$/.test(username.current.value) && username.current.value.length===8)
        {
            setWarning(null)
        }
        else{
            setWarning(username_warning)
        }
    }

    const handle_email = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.current.value))
        {
            setWarning(null)
        }        
        else{
            setWarning(email_warning)
        }
    }

    const handle_password = () => {
        if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.current.value))
        {
            setWarning(null)
        }
       else{
        setWarning(password_warning)
       }
       console.log(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.current.value)
    )

    }


return ( 
    <div className="register">
        <div className="register_shell">
            <div className="register_shell_animation">
                <img src={que} alt="xx" />
            </div>
                <div className="register_shell_entries">
                    <form action="">
                        <div className="warning" style={{display: warning ? "grid" : "none"}}>
                                {warning}
                                <span>
                                    <FontAwesomeIcon icon={faWarning} color={"blue"} size={"2x"} beatFade/>
                                </span>
                        </div>
                        <div className="register_shell_entries_username">
                            <input type="text" placeholder="Username..." ref={username} 
                                    onFocus={handle_username} 
                                    onBlur={()=> setWarning(null)}
                                    onChange={handle_username}
                            />
                        </div>
                        <div className="register_shell_entries_email">
                            <input type="text" placeholder="Email..." ref={email} 
                                    onFocus={handle_email} 
                                    onBlur={()=> setWarning(null)}
                                    onChange={handle_email}
                            />
                        </div>
                        <div className="register_shell_entries_password">
                            <input type="password" placeholder="Password..." ref={password} 
                            onFocus={handle_password} 
                            onBlur={()=> setWarning(null)}
                            onChange={handle_password}
                            />
                        </div>
                        <div className="register_shell_entries_password">
                            <input type="password" placeholder="Confirm password..." ref={confirmpassword} />
                        </div>
                        <div className="register_shell_entries_button">
                            <button id="registerbutton" type="submit" onClick={(e)=>handle_register(e)}>Register</button>
                        </div>
                    </form>
                        
                </div>
        </div>
    </div>
    );
}
 
export default Register;