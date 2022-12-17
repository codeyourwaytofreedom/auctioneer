import big from "./205.jpg";
import small from "./suv.jpg";

import "./auction.css";
import { useParams } from "react-router-dom";
const Auction = () => {
    const {id} = useParams();
    return ( 
        <div className="auction">
            <div className="auction_item_row">
                <div className="auction_item_row_images">
                    <div className="auction_item_row_images_smalls">
                        <div className="auction_item_row_images_smalls_order">
                            <button id="button-one">1 - {id}</button>
                            <button id="button-two">2</button>
                            <button id="button-three">3</button>
                        </div>
                        <div className="auction_item_row_images_smalls_small">
                                <img src={small} alt="" />
                        </div>
                        <div className="auction_item_row_images_smalls_small">
                                <img src={small} alt="" />
                        </div>
                        <div className="auction_item_row_images_smalls_small">
                                <img src={small} alt="" />
                        </div>
                    </div>
                    <div className="auction_item_row_images_big">
                        <img src={big} alt="" />
                    </div>
                </div>

                <div className="auction_item_row_details">
                        {[...Array(17)].map(e => 
                                <div className="auction_item_row_details_row">
                                    <span id="title">
                                        Title goes here.
                                    </span>
                                    <span id="details">
                                        Details goes here...
                                    </span>
                                </div>
                            )}
                </div>

            </div> 
        </div>
     );
}
 
export default Auction;