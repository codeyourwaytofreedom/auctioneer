import "./home.css";
import gear from "./gear.png";
import tugwar from "./tugwar.jpg";
import car from "../header/images/car.png";
import furniture from "../header/images/furniture.png";
import handcraft from "../header/images/handcraft.png";
import jewelry from "../header/images/jewelry.png";
import painting from "../header/images/painting.png";
import vcar1 from "./vcar1.png";
import vcar2 from "./vcar2.png";
import vcar3 from "./vcar3.png";
import handcraft1 from "./handcraft.jpeg";
import jwl from "./jewelry.jpeg";
import locked from "./lock.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



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
                    <span id="flexibility">Flexibility </span><span id="feels">feels </span><span id="amazing">amazing! </span>
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

{/*                 <div id="test">
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                </div> */}
            </div>
            <div className="home_upcoming">
                Upcoming Auctions!
            </div>
            <div className="home_productsdemo">
                <div className="home_productsdemo_product">
                        <div className="home_productsdemo_product_image">
                            <img src={handcraft1} alt="" />
                        </div>
                        <div className="home_productsdemo_product_details">
                            <span id="auctionstarts">
                                Auction starts on 17th January 2022; 10:00 am.
                            </span>
                            <span id="calltoaction">
                                <FontAwesomeIcon icon={faUser}/>  Sign up to see details and bid!
                            </span>
                            <span id="locked">
                                <img src={locked} alt="" />
                            </span>
                        </div>
                </div>

                <div className="home_productsdemo_product">
                        <div className="home_productsdemo_product_image">
                            <img src={vcar2} alt="" />
                        </div>
                        <div className="home_productsdemo_product_details">
                            <span id="auctionstarts">
                                Auction starts on 04th February 2022; 14:00 pm.
                            </span>
                            <span id="calltoaction">
                                <FontAwesomeIcon icon={faUser}/>  Sign up to see details and bid!
                            </span>
                            <span id="locked">
                                <img src={locked} alt="" />
                            </span>
                        </div>
                </div>
                
                <div className="home_productsdemo_product">
                        <div className="home_productsdemo_product_image">
                            <img src={jwl} alt="" />
                        </div>
                        <div className="home_productsdemo_product_details">
                        <span id="auctionstarts">
                                Auction starts on 21th January 2022; 10:00 am.
                            </span>
                            <span id="calltoaction">
                                <FontAwesomeIcon icon={faUser}/>  Sign up to see details and bid!
                            </span>
                            <span id="locked">
                                <img src={locked} alt="" />
                            </span>
                        </div>
                </div>
            </div>

            <div className="home_banner">
                <span>
                    ?? 2022 Code Your Way to Freedom, Inc.
                </span>
                <div id="banner_double">
                     <span>
                        Contact us
                    </span>
                    <span id="questions">
                        Questions
                    </span>
                </div>
            </div>

        </div>
     );
}
 
export default Home;