import "./home.css";
import gear from "./gear.png";
import tugwar from "./tugwar.jpg";
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
                        Explaination goes here..
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
            </div>
        </div>
     );
}
 
export default Home;