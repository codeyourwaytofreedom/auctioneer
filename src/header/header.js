import "./header.css";
import tab from "./images/tab.svg";
import furniture from "./images/furniture.png";
import car from "./images/car.png";
import jewelry from "./images/jewelry.png";
import handcraft from "./images/handcraft.png";
import painting from "./images/painting.png";
import axios from "axios";
import { useState } from "react";

const Header = () => {
    const [response_image, setImage] = useState(car)
    const handle_click = (e) => {
        console.log(e.currentTarget.value)
        axios.post("http://localhost:9000/category",
            {"body":e.currentTarget.value},{withCredentials: true})
            .then(response => 
                {
                 console.log(response)
                 console.log(response.data);
                 console.log(typeof(response.data));
                 //setImage(response.data)
                }
                )
            .catch(error => console.log(error))
    }
    return ( 
        <div className="Header">
            <div className="Header_tabs">
                
                    <button className="Header_tabs_tab" value={"cars"} onClick={(e)=>handle_click(e)}>
                        <div id="icon">
                            <img src={response_image} alt="tab" />
                        </div>
                        <span className="Header_tabs_tab_text">
                            Vintage Cars
                        </span>
                    </button>

                    <button className="Header_tabs_tab">
                        <div id="icon">
                            <img src={furniture} alt="tab" />
                        </div>
                        
                        <span className="Header_tabs_tab_text">
                            Furniture
                        </span>

                    </button>

                    <button className="Header_tabs_tab">
                        <div id="icon">
                            <img src={jewelry} alt="tab" />
                        </div>
                        <span className="Header_tabs_tab_text">
                            Jewelery
                        </span>

                    </button>

                    <button className="Header_tabs_tab">
                        <div id="icon">
                            <img src={handcraft} alt="tab" />
                        </div>
                        <span className="Header_tabs_tab_text">
                            Handcraft
                        </span>

                    </button>

                    <button className="Header_tabs_tab">
                        <div id="icon">
                            <img src={painting} alt="tab"/>
                        </div>
                        <span className="Header_tabs_tab_text">
                            Paintings
                        </span>
                    </button>
                    
                    <button className="Header_tabs_tab">
                        <div id="icon">
                            <img src={car} alt="tab" />
                        </div>
                        <span className="Header_tabs_tab_text">
                            Vintage Cars
                        </span>

                    </button>

                    <button className="Header_tabs_tab">
                        <div id="icon">
                            <img src={furniture} alt="tab" />
                        </div>
                        
                        <span className="Header_tabs_tab_text">
                            Furniture
                        </span>

                    </button>

                    <button className="Header_tabs_tab">
                        <div id="icon">
                            <img src={jewelry} alt="tab" />
                        </div>
                        <span className="Header_tabs_tab_text">
                            Jewelery
                        </span>

                    </button>

                    <button className="Header_tabs_tab">
                        <div id="icon">
                            <img src={handcraft} alt="tab" />
                        </div>
                        <span className="Header_tabs_tab_text">
                            Handcraft
                        </span>

                    </button>

                    <button className="Header_tabs_tab">
                        <div id="icon">
                            <img src={painting} alt="tab"/>
                        </div>
                        <span className="Header_tabs_tab_text">
                            Paintings
                        </span>
                    </button>
                    

            </div>
        </div>
     );
}
 
export default Header;