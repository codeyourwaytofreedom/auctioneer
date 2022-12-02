import "./header.css";
import tab from "./tab.svg";
import furniture from "./furniture.png";
import car from "./car.png";
import jewelry from "./jewelry.png";
import handcraft from "./handcraft.png";
import painting from "./painting.png";

const Header = () => {
    return ( 
        <div className="Header">
            <div className="Header_tabs">
                
                    <button className="Header_tabs_tab">
                        <img src={tab} alt="tab" className="tile"/>
                        <div id="icon">
                            <img src={car} alt="tab" />
                        </div>
                        <span className="Header_tabs_tab_text">
                            Vintage Cars
                        </span>

                    </button>
                    <button className="Header_tabs_tab">
                        <img src={tab} alt="tab" className="tile"/>
                        <div id="icon">
                            <img src={furniture} alt="tab" />
                        </div>
                        
                        <span className="Header_tabs_tab_text">
                            Furniture
                        </span>

                    </button>
                    <button className="Header_tabs_tab">
                        <img src={tab} alt="tab" className="tile"/>
                        <div id="icon">
                            <img src={jewelry} alt="tab" />
                        </div>
                        <span className="Header_tabs_tab_text">
                            Jewelery
                        </span>

                    </button>
                    <button className="Header_tabs_tab">
                        <img src={tab} alt="tab" className="tile"/>
                        <div id="icon">
                            <img src={handcraft} alt="tab" />
                        </div>
                        <span className="Header_tabs_tab_text">
                            Handcraft
                        </span>

                    </button>
                    <button className="Header_tabs_tab">
                        <img src={tab} alt="tab" className="tile"/>
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