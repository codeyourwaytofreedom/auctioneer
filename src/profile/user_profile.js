import "./user_profile.css";
import user from "./user.png";
import badge from "./badge.jpg";

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
                Profile details             
        </div>

    </div> )
    
    ;
}
 
export default User_profile;