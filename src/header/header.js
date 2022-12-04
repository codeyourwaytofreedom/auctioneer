import "./header.css";
import tab from "./images/tab.svg";
import furniture from "./images/furniture.png";
import car from "./images/car.png";
import jewelry from "./images/jewelry.png";
import handcraft from "./images/handcraft.png";
import painting from "./images/painting.png";

const Header = () => {
/*     useEffect(() => {
                        axios.get("http://localhost:5000",
                    ).then(function (response) {
                        console.log(response);
                    }).catch((error) => console.log(error))
    }, []); */
    return ( 
        <div className="Header">
            <div className="Header_tabs">
                
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