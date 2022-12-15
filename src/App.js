import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./header/header";
import Login from "./login/login";
import Navbar from "./navbar/navbar";
import Products from "./products/products";
import Register from "./register/register";
import Check_login from "./check_logging";
import Home from "./home/home";
import Auction from "./auction/auction";

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
                            <Navbar/>
                            <Header/>
                            <Products/>
                        </>}
          />
          </Route>

          <Route element={<Check_login/>}>
            <Route path="/bidding/:id" element={<Auction/>}/>
          </Route>


          <Route path="/login" 
                  element={<>
                    <div className="Page_login">
                      <Navbar/>
                      <Login/>
                    </div>
                  </>}
          />
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

        </Routes>
      </Router>
  );
}

export default App;
