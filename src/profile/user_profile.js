import "./user_profile.css";
import user from "./user.png";
import badge from "./badge.jpg";
import history from "./history.png";
import edit from "./edit.png";
import booked from "./booked.png";
import auction from "./auction.png";
import coupon from "./coupon.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import {note_user} from "../redux/userSlice";
import { useNavigate } from "react-router-dom";


const User_profile = () => {
    const user_in = useSelector((state) => state.userSlice.email)
    const username = useRef();
    const password = useRef();
    const new_password = useRef();
    const [error_message, setErrormessage] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handle_edit = (e) => {
        if(/^[A-Za-z0-9]*$/.test(username.current.value) && username.current.value.length===8 && username.current.value !== user_in.username)
        {
            axios.patch("http://localhost:9000/edituser",
            {user_to_be_edited: username.current.value, user_email: user_in.email}
            ).then ( response =>
                {
                    if(response.data == true){
                        dispatch(note_user({username:username.current.value, email:user_in.email}))
                        setErrormessage(<span style={{color:"green", textDecoration: "underline"}}>Username updated...</span>)
                    }
                    if(response.data === false)
                    {
                        console.log(response.data)
                        setErrormessage(<span style={{color:"crimson"}}> <span style={{color:"crimson",textDecoration: "underline"}}>Could not update the username </span> 
                                <br /> <span  style={{color:"crimson",textDecoration: "none !important"}}>* Username must be 8 characters-long and must include only letters and numbers!" </span>
                                </span>)
                    }
                }
                
            ).catch(err => console.log(err))
        }
        if(username.current.value === user_in.username)
        {
            setErrormessage(<span style={{color:"crimson"}}> <span style={{color:"crimson",textDecoration: "underline"}}>Could not update the username </span> 
                                <br /> <span  style={{color:"crimson",textDecoration: "none !important"}}>* can't change it to the same user name! </span>
                                </span>)
        }
        else{
            setErrormessage(<span style={{color:"crimson"}}> <span style={{color:"crimson",textDecoration: "underline"}}>Could not update the username </span> 
                                <br /> <span  style={{color:"crimson",textDecoration: "none !important"}}>* Username must be 8 characters-long and must include only letters and numbers!" </span>
                                </span>)
        }
        e.preventDefault()
    }

    const handle_edit_password = (e) => {
        if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.current.value)
            && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(new_password.current.value)
        )
        {
            axios.patch("http://localhost:9000/edituser",
            {old_password: password.current.value, new_password: new_password.current.value, user_email: user_in.email}
            ).then ( response =>
                {
                    if(response.data === false){
                       setErrormessage(<span style={{color:"crimson", textDecoration: "underline"}}>Could not update the password 
                                                                            <br /> * Please make sure that current password is correct!
                                                                            <br /> * Password must be 8 characters long minimum and must include at least one letter and one number!" 
                                                                            <br /> * Can't change it to the same password!
                                                                            </span>
                                                                             )
                    }
                    if(response.data === true)
                    {
                        setErrormessage(<span style={{color:"green", textDecoration: "underline"}}>Password update successful..</span>)
                        
                        setTimeout(() => {
                            axios.get("http://localhost:9000/logout",{withCredentials: true}
                            ).then(function (response) {
                                console.log(response);
                            }).catch((error) => console.log(error))
                            localStorage.removeItem("auctioneer_active");
                            navigate("/login")
                        }, 2000);
                    }
                }
                
            ).catch(err => console.log(err))
        }
        else{
            setErrormessage(<span style={{color:"crimson", textDecoration: "underline"}}>Could not update the password 
                                                                            <br /> * Please make sure that current password is correct!
                                                                            <br /> * Password must be 8 characters long minimum and must include at least one letter and one number!" 
                                                                            </span>
                                                                             )
        }
        e.preventDefault()
    }


    return ( 
    <div className="user_profile">
        <div className="user_profile_profile-picture">
                <img id="badge" src={badge} alt="badge" />
                <img id="user" src={user} alt="user" />
                <div className="user_profile_profile-picture_badge-details">
                    <div className="user_profile_profile-picture_badge-details_title">
                        Profile Details
                    </div>
                    <div className="user_profile_profile-picture_badge-details_username">
                         <span id="one">User Name</span><span id="two">:</span><span id="three">{user_in ? user_in.username : "....."}</span>
                    </div>
                    <div className="user_profile_profile-picture_badge-details_active">
                        <span id="one">Member since</span><span id="two">:</span><span id="three">22.12.2022</span>
                    </div>
                    <div className="user_profile_profile-picture_badge-details_email">
                        <span id="one_email">Email</span><span id="two">:</span><span id="three">{user_in ? user_in.email : "....."}</span>
                    </div>
                </div>
        </div>
        <div className="user_profile_details">
                <div className="user_profile_details_shell">
                        <div className="user_profile_details_shell_history">
                            <img src={history} alt="history" />
                            <div className="user_profile_details_shell_history_content">
                                    Bidding History
                            </div>
                        </div>
                        <div className="user_profile_details_shell_info">
                            <div className="bid_history">
                                <span>
                                    <img src={auction} alt="" />
                                </span>
                                <span id="double">
                                    <span>Auction attended for </span>
                                    <span>Item Code here</span>
                                </span>
                                <span id="double">
                                    <span>Auction attended on </span>
                                    <span>12th Dec. 2022</span>
                                </span>
                                <span id="double">
                                    <span>Auction result </span>
                                    <span>Negative</span>
                                </span>
                            </div>
                            <div className="bid_history">
                                <span>
                                    <img src={auction} alt="" />
                                </span>
                                <span id="double">
                                    <span>Auction attended for </span>
                                    <span>Item Code here</span>
                                </span>
                                <span id="double">
                                    <span>Auction attended on </span>
                                    <span>12th Dec. 2022</span>
                                </span>
                                <span id="double">
                                    <span>Auction result </span>
                                    <span>Negative</span>
                                </span>
                            </div>
                            <div className="bid_history">
                                <span>
                                    <img src={auction} alt="" />
                                </span>
                                <span id="double">
                                    <span>Auction attended for </span>
                                    <span>Item Code here</span>
                                </span>
                                <span id="double">
                                    <span>Auction attended on </span>
                                    <span>12th Dec. 2022</span>
                                </span>
                                <span id="double">
                                    <span>Auction result </span>
                                    <span>Negative</span>
                                </span>
                            </div>
                        </div>

                        
                        <div className="user_profile_details_shell_booked">
                            <div className="user_profile_details_shell_history_content" id="right">
                                    Auction Bookings
                            </div>
                            <img src={booked} alt="booked" />
                        </div>
                        <div className="user_profile_details_shell_info">
                            <div className="coupon">
                                <div className="coupon_holder">
                                    <img src={coupon} alt="" />
                                    <div className="coupon_holder_reservation">
                                        <div>
                                            Reservation No
                                        </div>
                                        <div>
                                            AU98367846
                                        </div>
                                    </div>
                                </div>
                                <div className="coupon_holder">
                                    <img src={coupon} alt="" />
                                    <div className="coupon_holder_reservation">
                                        <div>
                                            Reservation No
                                        </div>
                                        <div>
                                            AU68976322
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="user_profile_details_shell_edit">
                            <img src={edit} alt="edit" />
                            <div className="user_profile_details_shell_history_content">
                                    Edit profile
                            </div>
                        </div>
                        <div className="user_profile_details_shell_info">
                           <form action=""> 
                           <div id="error" style={{display: error_message ? "grid" : "none"}}>
                                {error_message}
                           </div>
                            <div id="edit_form">
                                        <div className="double" id="left">
                                            <input type="text" placeholder={user_in ? user_in.username : "....." }
                                            ref={username}/>
                                            <button onClick={(e)=>handle_edit(e)}>
                                                    Change Username
                                            </button>
                                        </div>      
                                        <div className="double">
                                            <input type="password" placeholder="current password"
                                            ref={password}/>
                                            <input type="password" placeholder="new password"
                                            ref={new_password}/>
                                            <button onClick={(e)=>handle_edit_password(e)}>
                                                    Change Password
                                            </button>
                                        </div>                             
                                </div>
                            </form>
                        </div>
                </div>            
        </div>

    </div> )
    
    ;
}
 
export default User_profile;