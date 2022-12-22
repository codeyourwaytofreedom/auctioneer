import "./user_profile.css";
import user from "./user.png";

const User_profile = () => {
    return ( 
    <div className="user_profile">
        <div className="user_profile_profile-picture">
            <div className="user_profile_profile-picture_photo">
                <div id="photo">
                    <img src={user} alt="" />
                </div>
                
            </div>
        </div>
    </div> )
    
    ;
}
 
export default User_profile;