import "./home.css";
import gear from "./gear.png";
import tugwar from "./tugwar.jpg";
import car from "../header/images/car.png";
import furniture from "../header/images/furniture.png";
import handcraft from "../header/images/handcraft.png";
import jewelry from "../header/images/jewelry.png";
import painting from "../header/images/painting.png";
import Test from "../test";

const Home = () => {
    return ( 
        <div className="home">
            <div className="home_intro">
                <div className="home_intro_motto" >
                    <span id="title">
                         Auctioneer: <span id="competitive">Competitive</span> Market Place!
                    </span>
                    <span id="detail">
                        Want to buy more than you can afford to???
                    </span>
                    <span id="detail">
                        Have strong gut feelings?
                    </span>
                    <span id="detail">
                        Up for fun shopping?
                    </span>
                </div>
                <div className="home_intro_howitworks">
                        <img src={tugwar} alt="tugwar" />
                </div>
                <div className="home_intro_explain">
                    <span id="title">
                        Bid & Buy
                    </span>
                    <span id="detail">
                        Sign up as a seller or a bidder!
                    </span>
                    <span id="detail">
                        Choose among hundreds of items...
                    </span>
                    <span id="detail">
                        and Bid your way to it.
                    </span>
                </div>
            </div>
            <div className="home_categories">
                <div className="home_categories_title">
                    Flexibility feels amazing!
                </div>
                <div className="home_categories_all">
                    <div className="home_categories_all_card">
                        <span id="text">
                            Flexible prices...
                        </span>
                    </div>
                    <div className="home_categories_all_minis">
                        <span className="mini" id="minione">
                            <img src={car} alt="" />
                        </span>
                        <span className="mini" id="minitwo">
                            <img src={furniture} alt="" />
                        </span>
                        <span className="mini" id="minithree">
                            <img src={jewelry} alt="" />
                        </span>
                        <span className="mini" id="minifour">
                            <img src={handcraft} alt="" />
                        </span>
                        <span className="mini" id="minifive">
                            <img src={painting} alt="" />
                        </span>
                    </div>
                </div>
                <div>
                    Category goes here..
                </div>

{/*                 <div id="test">
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                </div> */}
            </div>
            
            
        </div>
     );
}
 
export default Home;


                       /*  <span className="home_categories_all_card_image">
                            <img src={car} alt="tab" />
                        </span> */