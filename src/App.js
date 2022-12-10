import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./header/header";
import Login from "./login/login";
import Navbar from "./navbar/navbar";
import Products from "./products/products";
import Register from "./register/register";


function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" 
                  element={<>
                    <div className="Page_products">
                      <Navbar/>
                    </div>
                  </>}
          />

          <Route path="/bidding" 
                  element={<>
                    <div className="Page_products">
                      <Navbar/>
                      <Header/>
                      <Products/>
                    </div>
                  </>}
          />

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
