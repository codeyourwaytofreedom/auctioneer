import big from "./205.jpg";

import "./auction.css";
const Auction = () => {
    return ( 
        <div className="auction">
            <div className="auction_item_row">
                <div className="auction_item_row_images">
                    <div className="auction_item_row_images_smalls">
                        Small
                    </div>
                    <div className="auction_item_row_images_big">
                        <img src={big} alt="" />
                    </div>
                </div>

                <div className="auction_item_row_details">
                    Details goes here
                </div>

            </div> 
            <div className="auction_item_row_suggestions">
                    Suggestions
            </div> 
        </div>
     );
}
 
export default Auction;