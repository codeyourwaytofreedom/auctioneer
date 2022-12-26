import "./live.css";
import { useEffect } from "react";
import io from 'socket.io-client';
import { useRef } from "react";
import { useState } from "react";
import screen from "./screen.png";
import product from "./product.jpg";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import product4 from "./product4.jpg";
import hand from "./hand.png";

const socket = io.connect("http://localhost:9000")


const Live = () => {
    const [msg, setMessage] = useState("");

    useEffect(() => {
        const a = 5;
      //a === 5 ? console.log("hello") : null;
      console.log(a ?? 7)
      console.log(a ===5 ? a : null)

      a ?? console.log("srhwrshwr")
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
    

    const [test_array, setTestarray] = useState([product, product1, product2, product3, product4, product1])
    const [pos, setPos] = useState("relative")
    const [l, setL] = useState(0)

/*     useEffect(() => {
        setPos("absolute");
        setL(-550)
        setTimeout(() => {
            let n = test_array.length;
            let first = test_array.slice(0, 1);
            let remaining_elements = test_array.slice(1, n);
            setTestarray([ ...remaining_elements, ...first]);  
            setPos("relative")
            setL(0)
        }, 3000);
    }); */

    return ( 
        <div className="live">
            <div className="live_images">
                {
                    test_array.map((element, index)=>
                    <div className="live_images_image" style={{
                            position: index === 0 ? pos : "relative", left: index === 0 ? l : "0"
                    
                     }}>
                            <img src={element} alt="xxx" />

                    </div>
                    )
                }
            </div>
            <div className="live_auction">
                         <div className="live_auction_cell">
                            CEll
                        </div>
                        <div className="live_auction_cell">
                            CEll
                        </div>
                {
                    [...Array(10)].map((e) =>
                        <div className="live_auction_cell" >
                            <span id="hand">
                                <img src={hand} alt="" />
                            </span>
                            <span>Username</span>
                        </div>
                        )
                }

            </div>
        </div> 
    );
}
 
export default Live;