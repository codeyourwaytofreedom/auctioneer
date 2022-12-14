
import loading from "./auction_images/loading.jpg";
import spotlight from "./auction_images/spotlight.svg";
import occupied from "./auction_images/occupied.png";
import available from "./auction_images/available.png";
import banned from "./auction_images/banned.png";
import free from "./auction_images/free.png";

import "./auction.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

import Buttton_clicked from "../toolkit/button_clicked_animation";


const Auction = () => {
    const {id} = useParams();
    const [response_image, setImage] = useState(loading)
    const [response_array, setArray] = useState();
    const [bigone, setBig] = useState();
    const [availability, setAvailibity] = useState([]);
    const seats = useRef();
    const [modalopen, setModal] = useState(false);
    const [taken, setTaken] = useState(null);
    const core = useRef();
    const navigate = useNavigate();

    useEffect(() => {
            axios.get("http://localhost:9000/getimages",{headers: {"auctioned": id}})
            .then(response => 
                {
                 //console.log(response.data[1])
                 setArray(response.data[0]);
                 setAvailibity(response.data[1])
                }
                )
            .catch(error => console.log(error)) 
    }, []);

    useEffect(()=>{
        const outside_core = (event) => {
                    if(!core.current.contains(event.target))
                    {
                        setModal(false)
                    }
        }
        document.addEventListener("mousedown", outside_core)
        return () => {
            document.removeEventListener("mousedown", outside_core);
          }; 
    },[]);

    const scrollToBottom = (seat) => {
        setModal(!modalopen)
        if(seat === 1)
        {
            setTaken(true)
        }
        else{setTaken(false)}
        seats.current.scrollIntoView({ behavior: "smooth" });
    }

    const handle_click = () => {
        axios.post("http://localhost:9000/checkout", 
                {fee: "fee_attendance"},
                {withCredentials: true,headers:{"auctioned": id}}
        ).then( (response) => {
                window.location = response.data
                console.log(response.data)
        }).catch(error => console.log(error))
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
                <div className="booking_modal" style={{display: modalopen ? "grid" : "none"}} ref={core}>
                    <div className="booking_modal_shell">
                        <button id="closethemodal" onClick={()=> setModal(false)}>Close</button>
                        <div className="booking_modal_shell_content">
                                <div id="d-one">
                                    <div style={{width:"90%"}}>
                                        <img src={taken ? banned : free} alt="occup" />
                                    </div>
                                    
                                </div>
                                <div id="d-two" style={{color:"red",fontSize:"2vw"}}>
                                    {
                                        taken ? <span id="seattaken"> Seat taken! <br /> Please choose another one! </span> 
                                              :
                                                <div id="taketheseat">
                                                    <span>
                                                        Attendance Fee: ??6 (refundable)
                                                    </span>                                                   
                                                    <button onClick={handle_click}>
                                                        Pay & Book
                                                        <Buttton_clicked/>
                                                    </button>

                                                </div>
                                    }
                                    
                                </div>
                        </div>
                    </div>
                </div>

                <div className="auction_booking_seats" ref={seats}>
                    <div className="auction_booking_seats_tierone">
                        {
                            availability.slice(0,4).map ( seat => 
                                <button className="auction_booking_seats_tierone_seat">
                                    <span id="available">
                                        <img src={seat === 1 ? occupied : available} alt="" />
                                    </span>
                                    <img src={spotlight} alt="" onClick={() => scrollToBottom(seat)}/>  
                                </button>
                                )
                        }
                    </div>
                    <div className="auction_booking_seats_tiertwo">
                        {
                            availability.slice(4,7).map ( seat => 
                                <button className="auction_booking_seats_tiertwo_seat">
                                    <span id="available">
                                        <img src={seat === 1 ? occupied : available} alt="" />
                                    </span>
                                    <img src={spotlight} alt="" onClick={() => scrollToBottom(seat)}/>  
                                </button>
                                )
                        }
                    </div>

                    <div className="auction_booking_seats_tierthree">
                        {
                            availability.slice(7,9).map ( seat => 
                                <button className="auction_booking_seats_tierthree_seat">
                                    <span id="available">
                                        <img src={seat === 1 ? occupied : available} alt="" />
                                    </span>
                                    <img src={spotlight} alt="" onClick={() => scrollToBottom(seat)}/>  
                                </button>
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
                                    <img src={spotlight} alt="" onClick={() => scrollToBottom(seat)}/>  
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