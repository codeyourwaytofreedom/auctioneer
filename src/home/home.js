import "./home.css";
import gear from "./gear.png";
const Home = () => {
    return ( 
        <div className="home">
            <div className="home_intro">
                <div className="home_intro_motto" >
                    Auctioneer: Competitive Market Place!
                </div>
                
                <div className="home_intro_howitworks">
                    <div className="home_intro_howitworks_auction">
                        <span className="home_intro_howitworks_auction_text">
                            Auction Summary
                        </span>
                        <span className="home_intro_howitworks_auction_gear">
                            <img src={gear} alt="" />
                        </span>
                    </div>
                    <div className="home_intro_howitworks_bidding">
                        <span>
                            Bidding summary
                        </span>
                    </div>
                </div>



{/*                 <div className="puzzle">
                    <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 489.264 489.264">
                        <g>
                            <g>
                                <path d="M423.658,234.356c-12.438-0.003-24.01,3.457-33.869,9.468c-3.709,2.262-8.354,2.345-12.141,0.216    s-6.121-6.137-6.121-10.482V155.4c0-12.027-10.109-21.7-22.139-21.7h-95.748c-4.252,0-8.188-2.248-10.349-5.909    c-2.161-3.662-2.23-8.196-0.172-11.917c5.22-9.429,8.19-20.296,8.19-31.821c0-36.233-29.374-65.627-65.617-65.627    c-36.232,0-65.601,29.404-65.601,65.638c0,11.523,2.97,22.385,8.187,31.811c2.061,3.723,1.999,8.258-0.163,11.923    c-2.163,3.665-6.102,5.902-10.356,5.902H22.014c-12.032,0-22.013,9.673-22.013,21.7v76.237c0,4.231,2.226,8.15,5.859,10.318    c3.633,2.168,8.143,2.27,11.864,0.257c9.267-5.012,19.876-7.858,31.151-7.855c36.239-0.005,65.612,29.377,65.612,65.612    c0,36.238-29.373,65.616-65.612,65.606c-11.276,0-21.885-2.847-31.152-7.857c-3.725-2.014-8.234-1.92-11.871,0.25    C2.216,360.139,0,364.061,0,368.294v80.76c0,12.033,9.98,21.784,22.013,21.784h327.375c12.027,0,22.139-9.751,22.139-21.784    v-82.681c0-4.342,2.344-8.346,6.127-10.475c3.783-2.127,8.426-2.053,12.135,0.207c9.857,6.011,21.432,9.47,33.867,9.47    c36.24,0.01,65.607-29.368,65.607-65.606C489.264,263.734,459.896,234.351,423.658,234.356z"/>
                            </g>
                        </g>
                    </svg>
                </div> */}
                
            </div>
        </div>
     );
}
 
export default Home;