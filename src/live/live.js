import "./live.css";
import { useEffect } from "react";
import io from 'socket.io-client';

const socket = io.connect("http://localhost:9000")


const Live = () => {

    useEffect(() => {
        socket.on('connect', () => {
          console.log("Connected to Socket")
        });
    
        socket.on('disconnect', () => {
            console.log("Disconnected from Socket")
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

    const message_socket = () => {
        socket.emit('chat message', "Hello Dear Socket...");
    }


    return ( 
    <div className="live">
        Live auction room
        <br />
        <br />
        <br />
        <input type="text" />
        <button onClick={message_socket} >Socket Test</button>
    </div> );
}
 
export default Live;