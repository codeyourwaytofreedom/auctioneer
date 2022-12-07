import "./register.css";
import { useEffect, useState } from "react";
import axios from "axios";
import que from "./que.jpg";
import { useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWarning } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


const Register = () => {
/*         useEffect(() => {
                    axios.get("http://localhost:9000/express_backend"
                ).then(function (response) {
                    console.log(response);
                }).catch((error) => console.log(error))
        }); */
    const navigate = useNavigate();
    const [warning, setWarning] = useState(null);
    const [username_ok, setUserok] = useState(false);
    const [email_ok, setEmailok] = useState(false);
    const [password_ok, setPasswordok] = useState(false);
    const [confirm_ok, setConfirmok] = useState(false);
    const [temp_anim, setTemp] = useState(false)

    // form data references
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmpassword = useRef();

    let username_warning = "*Username must be 8 characters-long and must include only letters and numbers!";
    let email_warning = "*Please enter a valid email adress!";
    let password_warning = "*Password must be 8 characters long minimum and must include at least one letter and one number!";
    let confirm_warning = "*Please make sure that you confirm your password!";
    let html = <span>Hello</span>
    let mismatch = "Password Mismatch"

    const handle_register = (e) => {
        if(username_ok && password_ok && email_ok && confirm_ok)
        {
            console.log("hepsi ok")
            const auctioneer = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                //confirmpassword:confirmpassword.current.value
            }
    
            axios.post("http://localhost:9000/express_backend",
                {auctioneer: auctioneer}
            ).then(function (response) {
                console.log(response);
            }).catch((error) => console.log(error))
            setWarning(false)
            setTemp(true)
            e.preventDefault();
            setTimeout(() => {
                navigate("/login")
            }, 3000);
        }
        else{
            setWarning("Please double-check the fields with *")  
            e.preventDefault()          
        }
        if(password.current.value !== confirmpassword.current.value)
        {
            setWarning(mismatch)
            e.preventDefault()
        }
        


        
    }

    const handle_username = () => {
        if(/^[A-Za-z0-9]*$/.test(username.current.value) && username.current.value.length===8)
        {
            setWarning(null)
            setUserok(true)
        }
        else{
            setWarning(username_warning)
            setUserok(false)
        }
    }

    const handle_email = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.current.value))
        {
            setWarning(null)
            setEmailok(true)
        }        
        else{
            setWarning(email_warning)
            setEmailok(false)
        }
    }

    const handle_password = () => {
        if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.current.value))
        {
            setWarning(null)
            setPasswordok(true)
        }
       else{
        setWarning(password_warning)
        setPasswordok(false)
       }
    }

    const handle_confirm = () => {
        if(password.current.value === confirmpassword.current.value)
        {
            setWarning(null)
            setConfirmok(true)
        }
       else{
        setWarning(confirm_warning)
        setConfirmok(false)
       }
    }

return ( 
    <div className="register">
        <div className="register_shell">
            <div className="register_shell_animation">
                <img src={que} alt="xx" />
                <div id="success" style={{display: temp_anim ? "grid" : "none"}}>
                        Successfully registered as an Auctioneer...
                </div>
            </div>
                <div className="register_shell_entries">
                    <div id="temporary" style={{display: temp_anim ? "grid" : "none"}}>
                        <div class="lds-ripple"><div></div><div></div></div>
                    </div>
                
                    <form action="">
                        <div className="warning" style={{display: warning ? "grid" : "none"}}>
                                {warning}
                                <span>
                                    <FontAwesomeIcon icon={faWarning} color={"red"} size={"2x"} beatFade/>
                                </span>
                        </div>
                        <div className="register_shell_entries_username">
                            <span style={{opacity: username_ok ? "0" : "1"}}>*</span>
                            <input type="text" placeholder="Username..." ref={username} 
                                    onFocus={handle_username} 
                                    onBlur={()=> setWarning(null)}
                                    onChange={handle_username}
                            />
                        </div>
                        <div className="register_shell_entries_email">
                        <span style={{opacity: email_ok ? "0" : "1"}}>*</span>
                            <input type="text" placeholder="Email..." ref={email} 
                                    onFocus={handle_email} 
                                    onBlur={()=> setWarning(null)}
                                    onChange={handle_email}
                            />
                        </div>
                        <div className="register_shell_entries_password">
                        <span style={{opacity: password_ok ? "0" : "1"}}>*</span>
                            <input type="password" placeholder="Password..." ref={password} 
                            onFocus={handle_password} 
                            onBlur={()=> setWarning(null)}
                            onChange={handle_password}
                            />
                        </div>
                        <div className="register_shell_entries_password">
                        <span style={{opacity: confirm_ok ? "0" : "1"}}>*</span>
                            <input type="password" placeholder="Confirm password..." ref={confirmpassword} 
                                onFocus={handle_confirm} 
                                onBlur={()=> setWarning(null)}
                                onChange={handle_confirm}
                            />
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