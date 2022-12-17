import "./header.css";
import tab from "./images/tab.svg";
import furniture from "./images/furniture.png";
import car from "./images/car.png";
import jewelry from "./images/jewelry.png";
import handcraft from "./images/handcraft.png";
import painting from "./images/painting.png";
import initial from "./205.jpg";

import axios from "axios";
import { useState } from "react";
import Products from "../products/products";

const Header = () => {
    const [response_image, setImage] = useState(initial)
    const handle_click = (e) => {
        console.log(e.currentTarget.value)
        const url = "http://localhost:9000/category";
        const config = {
            responseType: 'blob',
            headers: {"query": e.currentTarget.value}
        }
        axios.get(url,config)
            .then(response => 
                {
                 let imgUrl = URL.createObjectURL(response.data)
                 setImage(imgUrl)
                }
                )
            .catch(error => console.log(error))
    }
    return ( 
        <>
        
        <div className="Header">
            <div className="Header_tabs">
                
                    <button className="Header_tabs_tab" value={"cars"} onClick={(e)=>handle_click(e)}>
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
        <Products response_image={response_image}/>
        </>
     );
}
 
export default Header;