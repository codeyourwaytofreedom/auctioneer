import "./home.css";
import gear from "./gear.png";
import tugwar from "./tugwar.jpg";
import car from "../header/images/car.png";
import furniture from "../header/images/furniture.png";
import handcraft from "../header/images/handcraft.png";
import jewelry from "../header/images/jewelry.png";
import painting from "../header/images/painting.png";

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
                <div>
                    Text goes here...
                </div>
                <div className="home_categories_all">
                    <div className="home_categories_all_card">
                        <span className="home_categories_all_card_image">
                            <img src={car} alt="tab" />
                        </span>
                    </div>
{/*                     <div className="home_categories_all_card">
                        <span className="home_categories_all_card_image">
                            <img src={furniture} alt="tab" />
                        </span>
                    </div>
                    <div className="home_categories_all_card">
                        <span className="home_categories_all_card_image">
                            <img src={handcraft} alt="tab" />
                        </span>
                    </div>
                    <div className="home_categories_all_card">
                        <span className="home_categories_all_card_image">
                            <img src={jewelry} alt="tab" />
                        </span>
                    </div>
                    <div className="home_categories_all_card">
                        <span className="home_categories_all_card_image">
                            <img src={painting} alt="tab" />
                        </span>
                    </div> */}
                    
                            

                </div>
                <div>
                    Category goes here..
                </div>
                <div>
                    Category goes here..
                </div>
            </div>
        </div>
     );
}
 
export default Home;