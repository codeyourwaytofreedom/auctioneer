import "./user_profile.css";
import user from "./user.png";
import badge from "./badge.jpg";
import history from "./history.png";
import edit from "./edit.png";
import booked from "./booked.png";

const User_profile = () => {
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
                         <span id="one">User Name</span><span id="two">:</span><span id="three">mrmoody7</span>
                    </div>
                    <div className="user_profile_profile-picture_badge-details_active">
                        <span id="one">Member since</span><span id="two">:</span><span id="three">22.12.2022</span>
                    </div>
                    <div className="user_profile_profile-picture_badge-details_email">
                        <span id="one_email">Email</span><span id="two">:</span><span id="three">can6@gmail.com</span>
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
                        <div>
                            Biddings go here
                        </div>
                        <div className="user_profile_details_shell_booked">
                            <div className="user_profile_details_shell_history_content" id="right">
                                    Auction Bookings
                            </div>
                            <img src={booked} alt="booked" />
                        </div>
                        <div className="user_profile_details_shell_edit">
                            <img src={edit} alt="edit" />
                            <div className="user_profile_details_shell_history_content">
                                    Edit profile
                            </div>
                        </div>
                </div>            
        </div>

    </div> )
    
    ;
}
 
export default User_profile;