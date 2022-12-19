import big from "./205.jpg";
import small from "./suv.jpg";
import loading from "./loading.jpg";
import spotlight from "./spotlight.svg";
import occupied from "./occupied.png";
import available from "./available.png";

import "./auction.css";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";


const Auction = () => {
    const {id} = useParams();
    const [response_image, setImage] = useState(loading)
    const [response_array, setArray] = useState();
    const [bigone, setBig] = useState();
    const [availability, setAvailibity] = useState([]);
    const seats = useRef();
    const [modalopen, setModal] = useState(false);

    useEffect(() => {
            axios.get("http://localhost:9000/getimages",{headers: {"auctioned": id}})
            .then(response => 
                {
                 console.log(response.data[1])
                 setArray(response.data[0]);
                 setAvailibity(response.data[1])
                }
                )
            .catch(error => console.log(error)) 
    }, []);

    const scrollToBottom = () => {
        setModal(!modalopen)
        seats.current.scrollIntoView({ behavior: "smooth" });
    }

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
                <div className="booking_modal" style={{display: modalopen ? "block" : "none"}}></div>
                <div className="auction_booking_seats" ref={seats}>
                    <div className="auction_booking_seats_tierone">
                        {
                            availability.slice(0,4).map ( seat => 
                                <div className="auction_booking_seats_tierone_seat">
                                    <span id="available">
                                        <img src={seat === 1 ? occupied : available} alt="" />
                                    </span>
                                    <img src={spotlight} alt="" onClick={scrollToBottom}/>  
                                </div>
                                )
                        }
                    </div>
                    <div className="auction_booking_seats_tiertwo">
                        {
                            availability.slice(4,7).map ( seat => 
                                <div className="auction_booking_seats_tiertwo_seat">
                                    <span id="available">
                                        <img src={seat === 1 ? occupied : available} alt="" />
                                    </span>
                                    <img src={spotlight} alt="" onClick={scrollToBottom}/>  
                                </div>
                                )
                        }
                    </div>

                    <div className="auction_booking_seats_tierthree">
                        {
                            availability.slice(7,9).map ( seat => 
                                <div className="auction_booking_seats_tierthree_seat">
                                    <span id="available">
                                        <img src={seat === 1 ? occupied : available} alt="" />
                                    </span>
                                    <img src={spotlight} alt="" onClick={scrollToBottom}/>  
                                </div>
                                )
                        }
                    </div>
                    <div className="auction_booking_seats_tierfour">
                        {
                            availability.slice(9,10).map ( seat => 
                                <div className="auction_booking_seats_tierfour_seat">
                                    <span id="available">
                                        <img src={seat === 1 ? occupied : available} alt="" />
                                    </span>
                                    <img src={spotlight} alt="" onClick={scrollToBottom}/>  
                                </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Auction;