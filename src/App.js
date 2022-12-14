import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./header/header";
import Login from "./login/login";
import Navbar from "./navbar/navbar";
import Register from "./register/register";
import Check_login from "./check_logging";
import Home from "./home/home";
import Auction from "./auction/auction";
import Payment from "./payment/payment";
import User_profile from "./profile/user_profile";
import Live from "./live/live";



function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" 
                  element={
                    <>
                      <Navbar/>
                      <Home/>
                    </>
                }
          />
          <Route element={<Check_login/>}>
            <Route path="/bidding" 
              element={<>
                  <Navbar  bg={"#80C4B7"}/>
                  <Header/>
                  {/* <Products/> */}
              </>}
            />
          </Route>

          <Route element={<Check_login/>}>
            <Route path="/bidding/:id" 
              element={ <>
                <Navbar/>
                <Auction/>
              </> 
              }/>
          </Route>

          <Route path="/login" 
                  element={<>
                    <div className="Page_login">
                      <Navbar/>
                      <Login/>
                    </div>
                  </>}
          />
          <Route element={<Check_login/>}>
              <Route path="/liveroom" 
                      element={<>
                          <Navbar bg={"#9370DB"}/>
                          <Live/>
                      </>}
              />
          </Route>

          <Route path="/register" 
                element={<>
                  <div className="page_register">
                    <Navbar/>
                    <Register/>
                  </div>
                  </>}
          />
          <Route path="/howitworks" 
                element={<>
                  <div className="page_howitworks">
                    <Navbar/>
                    <h1>About Auctioneer</h1>
                    <h1>About Auctioneer</h1>
                    <h1>About Auctioneer</h1>
                    <h1>About Auctioneer</h1>
                    <h1>About Auctioneer</h1>
                  </div>
                  </>}
          />

          <Route element={<Check_login/>}>
            <Route path="/checkout-success" element={
                <>
                  <Navbar/>
                  <Payment/>
                </>      
            }/>
          </Route>
          <Route element={<Check_login/>}>
            <Route path="/userprofile/:userid" element={
                <>
                  <Navbar bg={"gold"}/>
                  <User_profile/>
                </>      
            }/>
          </Route>
          

        </Routes>
      </Router>
  );
}

export default App;
