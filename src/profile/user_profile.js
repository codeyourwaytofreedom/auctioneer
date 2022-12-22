import "./user_profile.css";
import user from "./user.png";
import badge from "./badge.jpg";
import history from "./history.png";
import edit from "./edit.png";
import booked from "./booked.png";
import auction from "./auction.png";

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
                            <div>
                                Bidding history
                            </div>
                            <div>
                                Bidding history
                            </div>
                            <div>
                                Bidding history
                            </div>
                        </div>
                        <div className="user_profile_details_shell_edit">
                            <img src={edit} alt="edit" />
                            <div className="user_profile_details_shell_history_content">
                                    Edit profile
                            </div>
                        </div>
                        <div className="user_profile_details_shell_info">
                            <div>
                                Bidding history
                            </div>
                            <div>
                                Bidding history
                            </div>
                            <div>
                                Bidding history
                            </div>
                        </div>
                </div>            
        </div>

    </div> )
    
    ;
}
 
export default User_profile;