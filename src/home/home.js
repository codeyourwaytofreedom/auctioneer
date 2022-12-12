import "./home.css";
import gear from "./gear.png";
import tugwar from "./tugwar.jpg";
const Home = () => {
    return ( 
        <div className="home">
            <div className="home_intro">
                <div className="home_intro_motto" >
                    <span>
                         Auctioneer: Competitive Market Place!
                    </span>
                   
                </div>
                
                <div className="home_intro_howitworks">
                        <img src={tugwar} alt="tugwar" />
                </div>
                
            </div>
        </div>
     );
}
 
export default Home;