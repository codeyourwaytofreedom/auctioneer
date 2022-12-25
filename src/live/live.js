import "./live.css";
import { useEffect } from "react";
import io from 'socket.io-client';
import { useRef } from "react";
import { useState } from "react";
import screen from "./screen.png";
import product from "./product.jpg";

const socket = io.connect("http://localhost:9000")


const Live = () => {
    const [msg, setMessage] = useState("");

    useEffect(() => {
        socket.on('connect', () => {
          console.log("Connected to Socket")
        });
    
        socket.on('disconnect', () => {
            console.log("Disconnected from Socket")
        });

        socket.on('chat message', (ms) => {
            setMessage(ms)
            console.log("New user message received from the Socket server")
        });

        socket.on('pong', () => {
            console.log("Ponged Socket")
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
          socket.off('pong');
        };
      }, []);



    const message = useRef();
    const message_socket = () => {
        if(message.current.value)
        {
            socket.emit('chat message', message.current.value);
        }
        
    }


    return ( 
    <div className="live">
        <div className="live_screen">
                <div className="live_screen_info">
                        <div className="live_screen_info_item_images">
                            <button id="left" >L</button>
                            <button id="right">R</button>
                            <div className="live_screen_info_item_images_image"> 
                                <img src={product} alt="image" />
                            </div>
                            <div className="live_screen_info_item_images_image"> 
                                <img src={product} alt="image" />
                            </div>
                            <div className="live_screen_info_item_images_image"> 
                                <img src={product} alt="image" />
                            </div>
                            <div className="live_screen_info_item_images_image"> 
                                <img src={product} alt="image" />
                            </div>
{/*                             <div className="live_screen_info_item_images_live">
                                <img src={screen} alt="" />
                            </div> */}
                            
                        </div>
                        <div className="live_screen_info_participants">
                            Participants table
                        </div>
                        <div className="live_screen_info_bid_button">
                            Bidding button
                        </div>
                </div>
        </div>
        <input type="text" ref={message} />
        <button onClick={message_socket} >Socket Test</button>
    </div> );
}
 
export default Live;