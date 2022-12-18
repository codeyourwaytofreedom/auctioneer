import big from "./205.jpg";
import small from "./suv.jpg";
import loading from "./loading.jpg";

import "./auction.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Auction = () => {
    const {id} = useParams();
    const [response_image, setImage] = useState(loading)

    useEffect(() => {
        const url = "http://localhost:9000/item";
        const config = {
            responseType: 'blob',
            headers: {"auctioned": id}
        }
        axios.get(url,config)
            .then(response => 
                {
                 let imgUrl = URL.createObjectURL(response.data)
                 setImage(imgUrl)
                }
                )
            .catch(error => console.log(error))
    }, []);
    return ( 
        <div className="auction">
            <div className="auction_item_row">
                <div className="auction_item_row_images">
                    <div className="auction_item_row_images_smalls">
                        <div className="auction_item_row_images_smalls_order">
                            <button id="button-one">1</button>
                            <button id="button-two">2</button>
                            <button id="button-three">3</button>
                        </div>
                        <div className="auction_item_row_images_smalls_small">
                                <img src={"http://localhost:9000/furniture0.jpg"} alt="" />
                        </div>
                        <div className="auction_item_row_images_smalls_small">
                                <img src={response_image} alt="" />
                        </div>
                        <div className="auction_item_row_images_smalls_small">
                                <img src={response_image} alt="" />
                        </div>
                    </div>
                    <div className="auction_item_row_images_big">
                        <img src={response_image} alt="response" />
                    </div>
                </div>

                <div className="auction_item_row_details">
                        {[...Array(id.includes('car') ? 15 : 8)].map(e => 
                                <div className="auction_item_row_details_row">
                                    <span id="title">
                                        Title goes here.
                                    </span>
                                    <span id="details">
                                        Details go here...
                                    </span>
                                </div>
                            )}
                </div>

            </div> 
        </div>
     );
}
 
export default Auction;