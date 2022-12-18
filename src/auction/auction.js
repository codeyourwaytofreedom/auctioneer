import big from "./205.jpg";
import small from "./suv.jpg";
import loading from "./loading.jpg";
import spotlight from "./spotlight.svg";

import "./auction.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Auction = () => {
    const {id} = useParams();
    const [response_image, setImage] = useState(loading)
    const [response_array, setArray] = useState();
    const [bigone, setBig] = useState();

    useEffect(() => {
        /* const url = "http://localhost:9000/item";
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
            .catch(error => console.log(error)) */

            axios.get("http://localhost:9000/test",{headers: {"auctioned": id}})
            .then(response => 
                {
                 console.log(response.data)
                 setArray(response.data)
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
                        <div className="auction_item_row_images_smalls_small" onClick={()=> setBig(response_array[1])}>
                                <img src={response_array ? response_array[1] : response_image} alt="" />
                        </div>
                        <div className="auction_item_row_images_smalls_small" onClick={()=> setBig(response_array[2])}>
                                <img src={response_array ? response_array[2] : response_image} alt="" />
                        </div>
                        <div className="auction_item_row_images_smalls_small" onClick={()=> setBig(response_array[3])}>
                                <img src={response_array ? response_array[3] : response_image} alt="" />
                        </div>
                    </div>
                    <div className="auction_item_row_images_big">
                        <img src={bigone ? bigone : response_array ? response_array[1] : response_image} alt="response" />
                    </div>
                </div>

                <div className="auction_item_row_details">
                        {[...Array(15)].map(e => 
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
            <div className="auction_booking">
                <div className="auction_booking_seats">
                    <div className="auction_booking_seats_tierone">
                        <div className="auction_booking_seats_tierone_seat">
                            <img src={spotlight} alt="" />  
                        </div>
                        <div className="auction_booking_seats_tierone_seat">
                            <img src={spotlight} alt="" />  
                        </div>
                        <div className="auction_booking_seats_tierone_seat">
                            <img src={spotlight} alt="" />  
                        </div>
                        <div className="auction_booking_seats_tierone_seat">
                            <img src={spotlight} alt="" />  
                        </div>
                    </div>
                    <div className="auction_booking_seats_tiertwo">
                        <div className="auction_booking_seats_tiertwo_seat">
                            <img src={spotlight} alt="" />  
                        </div>
                        <div className="auction_booking_seats_tiertwo_seat">
                            <img src={spotlight} alt="" />  
                        </div>
                        <div className="auction_booking_seats_tiertwo_seat">
                            <img src={spotlight} alt="" />  
                        </div>
                    </div>
                    <div className="auction_booking_seats_tierthree">
                        <div className="auction_booking_seats_tierthree_seat">
                            <img src={spotlight} alt="" />  
                        </div>
                        <div className="auction_booking_seats_tierthree_seat">
                            <img src={spotlight} alt="" />  
                        </div>
                    </div>
                    <div className="auction_booking_seats_tierfour">
                        <div className="auction_booking_seats_tierfour_seat">
                            <img src={spotlight} alt="" />  
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Auction;