import "./button_clicked.css";
import { useState } from "react";
const Buttton_clicked = () => {
    const [opacity, setOpacity] = useState(0);
    return (  
        
       <div className="outer_animation" onClick={()=> setOpacity(1)}>
         <div class="rotate" style={{opacity: opacity}}></div>
       </div>
    );
}
 
export default Buttton_clicked;